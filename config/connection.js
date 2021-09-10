// sql db credential import
require('dotenv').config();

//https://sequelize.org/ - a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
const Sequelize = require('sequelize');

//https://elements.heroku.com/addons/jawsdb incase the app is deployed on heroku 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// exporting sequelize for future use
module.exports = sequelize;
