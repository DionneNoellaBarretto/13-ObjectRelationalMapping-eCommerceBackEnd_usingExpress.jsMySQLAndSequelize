const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  Tag.findAll({
    // be sure to include its associated Product data
      include: [{
        model: Product,
        attributes: ['id','category_id', 'product_name','stock', 'price' ],
      }]
    })
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
  });



  // Error: SyntaxError: await is only valid in async functions and the top level bodies of modules
	// try {
	// 	const tagData = await Tag.findAll({
	// 		include: [{ model: Product, through: ProductTag, as: 'products_with_tag' }],
	// 	});
	// 	res.status(200).json(tagData);
	// } catch (error) {
	// 	res.status(500).json(err);
	// }

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    // be sure to include its associated Product data
    include: [{
      model: Product,
      attributes: ['id','category_id', 'product_name','stock', 'price' ],
    }]
    })
    .then((data) => {
      if (!data) {
        res.status(404).json({message: 'Sorry, No tag found with this id!'});
        return;
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
  });
  
  router.post('/', (req, res) => {
    // create a new tag
    Tag.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
  });
  
  router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    Tag.update(req.body, {
      where: {id: req.params.id},
    })
    .then((data) => {
      if (!data[0]) {
        res.status(404).json({message: 'Yikes! Invalid id - No tag found!'});
        return;
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
  });
  

// error with asyncawait: SyntaxError: await is only valid in async functions and the top level bodies of modules
//   try {
//     const tagData = await Tag.findByPk(req.params.id, {
//       include: [Product],
//     });
//     if (!tagData) {
//       res.status(404).json({
//         message: 'Oops! No tag found with this id!'
//       });
//       return;
//     }

//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }

// });

// router.post('/', (req, res) => {
//   // create a new tag
//   try {
//     const tagData = await Tag.create(req.body);
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put('/:id', (req, res) => {
//   // update a tag's name by its `id` value

//   try {
// 		const tagData = await Tag.update(req.body, {
// 			where: {
// 				id: req.params.id,
// 			},
// 		});
// 		if (!tagData) {
// 			res.status(404).json({ message: 'Invalid!! No tag found with that id!' });
// 			return;
// 		}
// 		res.status(200).json(tagData);
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// });

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id: req.params.id},
  })
  .then((data) => {
    if (!data) {
      res.status(404).json({message: 'Error! No tag found using this id!'});
      return;
    }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
});



//export for future use
module.exports = router;
