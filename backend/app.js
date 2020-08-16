const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRouter = require('./routes/products');

const app = express();
app.use(cors());

// Setting up a database connection
mongoose.connect('mongodb+srv://User_1:07049374@cluster0.esfo1.mongodb.net/Cluster0?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to your database!');
    })
    .catch((error) => {
        console.log('Unable to connect to the database!');
        console.error(error);
    });

// Setting up CORS Policy Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/api/products', productsRouter);

module.exports = app;