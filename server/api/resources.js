const router = require('express').Router();
const { Resource } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.findAll();
    res.status(200).send(resources);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, imageUrl, description } = req.body;
    const resource = await Resource.create({ name, imageUrl, description });
    res.json(resource);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const resource = await Resource.findByPk(id);
    res.json(resource);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await Resource.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
