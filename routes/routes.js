const express = require("express")
const app = express.Router()
const word = "empty"
try{
const home = require('../controller/controller')
if(home){
  word = "constroller goted ... from router"
  }
catch(ex){word = "error catched in == "+ ex}
//, shorten, newpage, remove
//app.post('/short', shorten)

app.get('/', (req,res)=>{
   res.render('index',{title: word});
})

//app.get('/:newLink', newpage)
//app.get('/delete/:id', remove)

module.exports = app
