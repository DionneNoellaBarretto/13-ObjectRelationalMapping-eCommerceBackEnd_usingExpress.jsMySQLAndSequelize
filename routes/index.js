//import dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

//define a route to /api appended to the base url
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

//exported for future use
module.exports = router;