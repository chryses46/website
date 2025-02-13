require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const Sequelize = require('sequelize');
const SkillModel = require('./skill');
const TechModel = require('./tech');
const AccomplishmentModel = require('./accomplishment');
const ExperienceModel = require('./experience');
const DutyModel = require('./duty');

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
const Accomplishment = AccomplishmentModel(sequelize, Sequelize);
const Experience = ExperienceModel(sequelize, Sequelize);
const Duty = DutyModel(sequelize, Sequelize);
Experience.associate(sequelize.models);
Duty.associate(sequelize.models);

module.exports = {
  Skill,
  Tech,
  Accomplishment,
  Experience,
  Duty
};