//dependency import
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  // await ensures the operation is handled 1 line at a time to avoid db corruption
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SUCCESSFULLY SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SUCCESSFULLY SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SUCCESSFULLY SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SUCCESSFULLY SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SUCCESSFULLY SEEDED -----\n');

  process.exit(0);
};
//call the function
seedAll();
