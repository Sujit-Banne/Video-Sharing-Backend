const express = require('express');
const mongoose = require("mongoose")
const app = express();
app.use(express.json())
const connect = require("./connection/dbConnection")
const dotenv = require('dotenv')
require('dotenv').config()
const PORT = process.env.PORT || 5050




//testing 
app.use('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`server is on `, PORT);
  });

