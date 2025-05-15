const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DATABASE_PATH || path.join(__dirname, 'database.sqlite')
});

const db = {
  sequelize,
  Sequelize,
  Counter: require('./counter')(sequelize, Sequelize.DataTypes)
};

module.exports = db;