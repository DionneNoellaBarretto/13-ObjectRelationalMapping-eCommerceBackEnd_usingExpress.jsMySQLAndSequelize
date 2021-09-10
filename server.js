//importing dependencies: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const express = require('express');
const routes = require('./routes');
// import sequelize connection

// This app starts a server and listens on port 3001 for connections
const app = express();
const PORT = process.env.PORT || 3001;

//using middleware https://expressjs.com/en/guide/using-middleware.html
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route usage deifned https://expressjs.com/en/4x/api.html#app.use
app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
