const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const SampleModel = sequelize.define('SampleModel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = SampleModel;