const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {  // find all tags
    const tagData = await Tag.findAll({
      include: [Product],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {

 
  try {  // find a single tag by its `id`
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    if (!tagData) {
      res.status(404).json({
        message: 'Sorry! No tag found with this id!'
      });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {

  try {  // create a new tag
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  
  try {// update a tag's name by its `id` value
    const tagData = await Tag.update({
      tag_name: req.body.tag_name,
    },
      {
      where: {
        id: req.params.id,
      }
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
 
  try { // delete on tag by its `id` value
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
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

module.exports = router;
