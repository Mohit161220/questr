const express = require('express');
const route = express.Router();
const homeController = require('../controllers/home_controller');

console.log('routes -> index.js');
//localhost:3000/
route.get('/', homeController.home);
route.use('/users', require('./users'));
route.use('/questions', require('./questions'));
route.use('/topics', require('./topics'));

module.exports = route;