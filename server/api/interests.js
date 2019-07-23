const router = require('express').Router();
const { Interest } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const interests = await Interest.findAll();
    res.status(200).send(interests);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, imageUrl } = req.body;
    const interest = await Interest.create({ name, imageUrl });
    res.json(interest);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const interest = await Interest.findByPk(id);
    res.json(interest);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await Interest.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
