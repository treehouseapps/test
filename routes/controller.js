const express = require('express')
const app = express()
//const collection = require('../model/model')

const home = async (req, res) => {
    res.render('index',{title: "Collection goted and the error is = "});
}

    module.exports = home
