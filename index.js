const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
/*app.set('views', path.join(__dirname, 'views'));


*/
app.get('/', (req, res) => {
   res.send('<h1>index</h1>');
});

app.listen(3000, () => {
    console.log('Server running on port ' + 3000);
});
