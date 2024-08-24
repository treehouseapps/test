const express = require('express');
const app = express();
const mongoose = require('mongoose');
//mongodb+srv://sarah:sarah@cluster0.xr5qdwo.mongodb.net/URL
try {
    mongoose.connect('mongodb+srv://sarah:sarah@cluster0.xr5qdwo.mongodb.net/URL'
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err));
} catch (error) {
    console.log("Error connecting to database:", error);
}

const schema = new mongoose.Schema({
    long: {
      type: String,
      required: true
    },
    short: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true,
      unique: true
    }
});

const collection = mongoose.model('link', schema);

module.exports = collection;
