require('dotenv').config() ;
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const path = require('path')
const db = require("../backend/config/mongoose");
db.connect();
const MongoStore = require('connect-mongo');

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongo store is used to store the session cookie in db
app.use(session({
    name : 'QUESTR',
    secret : 'QUESTR',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (10000 * 60 * 100)
    }, 
    store : MongoStore.create({
        // mongooseConnection : db,
        mongoUrl : process.env.MONGO_CONNECTION_STRING,
        autoRemove : 'disabled'
    }, function(err){
        console.log(err || 'connect-mongodb setup ok');
    }) 
}));

// for passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// express routers
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error', err);
    }
    console.log(`Server running Happily on port : ${port}`);
})