const Sequelize = require('sequelize');
const db = require('./database');

const Project = db.define('project', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Project;
