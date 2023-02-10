// Dependencies
const express = require('express');
// const path = require('path');

// Server routes
const htmlRouter = require('./routes/html-routes.js');
const apiRouter = require('./routes/api-routes.js');

const app = express();
// Create port
const PORT = 3001;






// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all files from the 'public' folder
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// Listner
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);