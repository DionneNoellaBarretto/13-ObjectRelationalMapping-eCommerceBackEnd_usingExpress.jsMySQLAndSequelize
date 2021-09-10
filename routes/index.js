//import dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

//define a route to /api appended to the base url
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Sorry! This is a Wrong Route. Try again!</h1>")
});

//exported for future use
module.exports = router;