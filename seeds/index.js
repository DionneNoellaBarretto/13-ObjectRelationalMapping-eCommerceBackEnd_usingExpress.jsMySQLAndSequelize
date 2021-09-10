//dependencies import

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
//mysql db connection import
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SUCCESSFULLY SYNCED -----\n');
  // awaits ensure this command is executed to completion prior to proceeding to the next line to avoid db corruption of any sorts
  await seedCategories();
  console.log('\n----- CATEGORIES SUCCESSFULLY SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SUCCESSFULLY SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SUCCESSFULLY SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SUCCESSFULLY SEEDED -----\n');
// exiting
  process.exit(0);
};
// calling the sees function which will pre populate the db with starter code
seedAll();
