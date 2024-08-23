const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
const routes = require('./routes/routes')
let word = "yeeeeeeee";
import route from "./routes/routes.js";
if(route){word = "route also"}
else{
   word = "yee"}
app.get('/', (req, res) => {
   res.render('index', { title: word });
});

app.listen(3000, () => {
    console.log('Server running on port ' + 3000);
});
