const router = require('express').Router();
const { Project } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.status(200).send(projects);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, imageUrl } = req.body;
    const project = await Project.create({ name, imageUrl });
    res.json(project);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const project = await Project.findByPk(id);
    res.json(project);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const project = await Project.findByPk(id);
    if (!project) {
      return res.sendStatus(404);
    }
    const { description } = req.body;
    const updatedProject = await project.update({ description });
    res.json(updatedProject);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await Project.destroy({ where: { id } });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
