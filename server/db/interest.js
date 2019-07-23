const Sequelize = require('sequelize');
const db = require('./database');

const Interest = db.define('interest', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Interest;
