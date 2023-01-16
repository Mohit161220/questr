const express = require('express');
const route = express.Router(); 
const passport = require('passport');
const topicsController = require('../controllers/topics_controller');
// need to be added
route.get('/', topicsController.allTopics);
module.exports = route;