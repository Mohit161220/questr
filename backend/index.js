require('dotenv').config() ;
const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

const db = require("../backend/config/mongoose");
db.connect();

app.use(express.json());
app.use(cors());
app.use('/', require('./routes'));

const port = process.env.PORT || 3000;
app.listen(port, function(err){
    if(err){
        console.log('Error', err);
    }
    console.log(`Server running Happily on port : ${port}`);
})

