const express = require('express');
const app = express();
require('dotenv').config()
const routes = require('./routes/routes')
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log('Server running on port ' + process.env.PORT);
});
