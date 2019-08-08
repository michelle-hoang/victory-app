const router = require('express').Router();
const { Crime } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const crimes = await Crime.findAll();
    res.status(200).send(crimes);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const singleCrime = await Crime.findByPk(id);
    res.json(singleCrime);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
