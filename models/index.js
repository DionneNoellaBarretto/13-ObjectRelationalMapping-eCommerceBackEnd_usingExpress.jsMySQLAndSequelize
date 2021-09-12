// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:'category_id', // for joins
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey:'category_id',
  onDelete:'CASCADE', // ensures deletion trickles down to all children incase parent is deleted
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag,
  unique: false,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag,
  unique: false,
  foreignKey: 'tag_id',
});

//for future use
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
