const express = require('express');
const app = express();
const mongoose = require('mongoose');

try {
    mongoose.connect('mongodb+srv://Beki:78122775Beki@cluster0.6ypmi.mongodb.net/link?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err));
} catch (error) {
    console.log("Error connecting to database:", error);
}

const schema = new mongoose.Schema({
    link: {
        type: String,
        required: true // Optional: Add validation if needed
    },
    generated: {
        type: String,
        required: true // Optional: Add validation if needed
    },
    newLink: {
        type: String,
        required: true // Optional: Add validation if needed
    },
});

const collection = mongoose.model('link', schema);

module.exports = collection;
