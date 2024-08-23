
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/routes')
//require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

try{
  app.use('/', routes)
}
catch(ex){
  app.get('/', (req, res) => {
  try { res.render('index'); }
  catch (er) { res.send(er) }
});
console.log(ex)
}


app.listen(3000, () => {
  console.log('Server running on port ' + 3000);
});
