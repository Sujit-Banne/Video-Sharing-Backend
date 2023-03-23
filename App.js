const express = require('express');
const app = express();
app.use(express.json())

const dotenv = require('dotenv')
require('dotenv').config()
const PORT = process.env.PORT || 4000

app.use('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})
