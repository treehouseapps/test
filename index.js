const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))
app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname + '/view')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
   try{ res.render('index', { title: 'Home is home' })}
    catch(ex){res.send("<h1 class="title">error == "+ex+"</h1>")}
})

app.listen(3000, () => {
    console.log('Server Running in port ' + 3000)
})
