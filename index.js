const express = require('express');
const app = express();
require('dotenv').config(); // Ensure .env exists if used
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // Ensure public folder exists

app.set('view engine', 'ejs'); // Ensure ejs is installed
app.set('views', path.join(__dirname, 'views')); // Ensure views folder exists

app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes'); // Ensure routes file exports a router
app.use('/', routes);

app.listen(3000, () => {
    console.log('Server running on port ' + 3000);
});
