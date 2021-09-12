//dependency import
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // not allowing null value
      primaryKey: true,
      autoIncrement: true, //no need to set id explicitly in seed
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category', // renaming
  }
);

//future use
module.exports = Category;
