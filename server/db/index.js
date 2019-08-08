// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Crime = require('./crime');

module.exports = {
  // Include your models in this exports object as well!
  db,
  Crime,
};
