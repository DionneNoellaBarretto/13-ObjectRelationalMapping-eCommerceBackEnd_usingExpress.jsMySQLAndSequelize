const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true, //avoiding manual id creation
      primaryKey: true,
      allowNull: false, //ensures no null values are present 
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false, //ensures no null values are present 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
