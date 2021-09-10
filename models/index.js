// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:'category_id',
  onDelete: 'CASCADE'
});
// Categories have many Products
Category.hasMany(Product, {foreignKey: 'categoryID' , onDelete: 'CASCADE',});
// Products belongToMany Tags (through ProductTag)
Category.hasMany(Product, {
	foreignKey: 'category_id',
	onDelete: 'CASCADE',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
