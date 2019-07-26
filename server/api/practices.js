const router = require('express').Router();
const { Practice } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const practices = await Practice.findAll();
    res.status(200).send(practices);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, imageUrl, description } = req.body;
    const project = await Practice.create({ name, imageUrl, description });
    res.json(project);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const practice = await Practice.findByPk(id);
    res.json(practice);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const practice = await Practice.findByPk(id);
    if (!practice) {
      return res.sendStatus(404);
    }
    const { description } = req.body;
    const updatedPractice = await practice.update({ description });
    res.json(updatedPractice);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await Practice.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
