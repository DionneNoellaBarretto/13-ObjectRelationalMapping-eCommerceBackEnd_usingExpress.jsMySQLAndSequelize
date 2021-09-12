// connect to db using secret creds stored in .env file
require('dotenv').config();

//importing sequelize
const Sequelize = require('sequelize');

//for heroku db creds
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
//for future use
module.exports = sequelize;
