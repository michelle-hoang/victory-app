const Sequelize = require('sequelize');
const db = require('./database');

const Practice = db.define('practice', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Practice;
