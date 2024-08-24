const express = require('express')
const app = express()

const collection = require('../model/model.js')
if (collection.length > 0){
    console.log("greater than 3")
}
if (collection.length < 1){
    console.log("greater less than 1")
}
    
const home = async (req, res) => {
    const result = await collection.find()
    if(result.length){
    res.render('index', { result })
    }
    else{res.render('index', { title: " no data" })}
}

    module.exports = {home};
