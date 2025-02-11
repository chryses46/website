require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const Sequelize = require('sequelize');
const SkillModel = require('./skill');
const TechModel = require('./tech');

const sequelize = new Sequelize(
  process.env.SQL_DB,
  process.env.SQL_USER,
  process.env.SQL_PASS,
  {
    host: process.env.SQL_HOST,
    dialect: 'mysql'
  }
);

const Skill = SkillModel(sequelize, Sequelize);
const Tech = TechModel(sequelize, Sequelize);

module.exports = {
  Skill,
  Tech
};