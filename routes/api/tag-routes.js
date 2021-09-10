const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
	try {
		const tagData = await Tag.findAll({
			include: [{ model: Product, through: ProductTag, as: 'products_with_tag' }],
		});
		res.status(200).json(tagData);
	} catch (error) {
		res.status(500).json(err);
	}


});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    if (!tagData) {
      res.status(404).json({
        message: 'Oops! No tag found with this id!'
      });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

  try {
		const tagData = await Tag.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		if (!tagData) {
			res.status(404).json({ message: 'Invalid!! No tag found with that id!' });
			return;
		}
		res.status(200).json(tagData);
	} catch (error) {
		res.status(500).json(error);
	}
});

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
