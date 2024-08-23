const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
 app.set('view engine', 'ejs');
 //app.set('views', path.join(__dirname, 'view'));
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.render('index',{title:"yeeeeeeeeee"});
});

app.listen(3000, () => {
    console.log('Server running on port ' + 3000);
});
