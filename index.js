const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/view')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', { title: 'Home is home' })
})

app.listen(3000, () => {
    console.log('Server Running in port ' + 3000)
})
