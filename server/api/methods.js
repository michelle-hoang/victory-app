const router = require('express').Router();
const { Method } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const methods = await Method.findAll();
    res.status(200).send(methods);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, imageUrl, description } = req.body;
    const project = await Method.create({ name, imageUrl, description });
    res.json(project);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const method = await Method.findByPk(id);
    res.json(method);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const method = await Method.findByPk(id);
    if (!method) {
      return res.sendStatus(404);
    }
    const { description } = req.body;
    const updatedMethod = await method.update({ description });
    res.json(updatedMethod);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await Method.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
