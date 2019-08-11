const router = require('express').Router();
const { Data } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const data = await Data.findAll();
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const singleData = await Data.findByPk(id);
    res.json(singleData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
