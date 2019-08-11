const Sequelize = require('sequelize');
const db = require('./database');

const Data = db.define('data', {
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

module.exports = Data;
