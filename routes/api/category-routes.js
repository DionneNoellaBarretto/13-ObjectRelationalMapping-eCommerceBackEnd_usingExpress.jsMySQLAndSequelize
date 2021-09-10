const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
  // be sure to include its associated Products
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'category_id', 'price', 'stock'],
    }]
  })
  .then((data) => res.json(data))
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {id: req.params.id},
  // be sure to include its associated Products
    include:  [{
      model: Product,
      attributes: ['id', 'product_name', 'category_id', 'price', 'stock'],
    }]
  })
  .then((data) => {
    if (!data) {
      res.status(404).json({message: 'Yikes! No category found with this id!'});
      return;
    }
    res.json(data);
  })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((data) => res.json(data))
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {id: req.params.id}
  })
  .then((data) => {
    if (!data) {
      res.status(404).json({message: 'Oops! No category found with this id!'});
      return;
    }
    res.json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id}
  })
  .then((data) => {
    if (!data) {
      res.status(404).json({message: 'Oh NO! No category found for this id!'});
      return;
    }
    res.json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  })
});

//export for future use
module.exports = router;


//getting an async await error: SyntaxError: await is only valid in async functions and t
// router.get('/:id', async (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products

//   try {
//     const categoryDataById = await Category.findByPk(req.params.id, {
//         include: [{ model: Product, as: 'products' }],
//     });
//     if (!categoryDataById) {
//       res.status(404).json({
//         message: 'Yikes! No category found with this id!'
//       });
//       return;
//     }

//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//   // create a new category
//   try {
// 		const categoryData = await Category.create(req.body);
// 		res.status(200).json(categoryData);
// 	} catch (error) {
// 		res.status(400).json(error);
// 	}
// });

// router.put('/:id', async (req, res) => {
//   // update a category by its `id` value
//   try {
//     const categoryData = await Category.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     });
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }

// });

// router.delete('/:id', async (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const categoryData = await Category.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!categoryData) {
//       res.status(404).json({
//         message: 'No category found with this id!'
//       });
//       return;
//     }

//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


