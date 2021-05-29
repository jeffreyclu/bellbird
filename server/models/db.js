const e = require('express');
const Sequelize = require('sequelize');

const dbname = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbport = process.env.DB_PORT;

const db = new Sequelize(dbname, username, password, {
  host: process.env.DB_URL,
  port: dbport,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

(async () => {
  try {
    await db.authenticate();
    console.log('Connected to DB.'.cyan);
    if (process.env.NODE_ENV === 'development') {
      console.log('db.models', db.models);
      await db.sync({force: true});
    } else {
      await db.sync();
      console.log('All models synced.'.green.bold);
    }
  } catch (error) {
    console.log(`${error}`.red);
  }
})();

module.exports = db;
