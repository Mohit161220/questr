const mongoose = require("mongoose");
require('dotenv').config() ;
module.exports.connect = () => {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING, {useNewUrlParser: true})
  .then(()=> {
    console.log ('connected to database');
  })
  .catch((err)=>{
    console.log('connection failed', err);
  })
};
