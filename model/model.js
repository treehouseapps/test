const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Beki:78122775Beki@cluster0.6ypmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/link')
    .then(() => {
        console.log('Database Connected');
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

const schema = new mongoose.Schema({
    link: {
        type: String,
        required: true // Example of adding validation
    },
    generated: {
        type: String,
        required: true // Example of adding validation
    },
    newLink: {
        type: String,
        required: true // Example of adding validation
    },
});

const collection = mongoose.model('link', schema);

module.exports = collection;
