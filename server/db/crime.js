const Sequelize = require('sequelize');
const db = require('./database');

const Crime = db.define('crime', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  frequency: {
    type: Sequelize.STRING,
  },
});

module.exports = Crime;
