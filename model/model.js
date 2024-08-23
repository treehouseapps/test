const express = require('express')
const app = express()
const mongoose = require('mongoose')

const DbLink = "mongodb+srv://Beki:78122775Beki@cluster0.6ypmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DbLink)
    .then(() => console.log('Database Connected'))
    .catch(err => console.error('Database connection error:', err));

const schema = new mongoose.Schema({
    link: {
        type: String
    },
    generated: {
        type: String
    },
    newLink: {
        type: String
    }
});

const collection = new mongoose.model('link', schema)
module.exports = collection
