// **Importing Required Modules**
const express = require('express');
const app = express();
const path = require('path');

// **Setting Up Static Files**
app.use(express.static(path.join(__dirname, 'public')));

// **Setting Up View Engine**
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// **Middleware for Parsing URL-Encoded Data**
app.use(express.urlencoded({ extended: true }));

// **Defining Routes**
app.get('/', (req, res) => {
   res.render('index');
});

// **Starting the Server**
app.listen(3000, () => {
    console.log('Server running on port ' + 3000);
});
