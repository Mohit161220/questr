const express = require('express');
const route = express.Router(); 
const passport = require('passport');

const usersController = require('../controllers/users_controller');

route.post('/sign-up', usersController.signUp); 
route.post('/sign-in', passport.authenticate(
    'local', 
    {failureRedirect : '/users/sign-in' }
),usersController.signIn); 
route.get('/sign-out', usersController.signOut); 
route.get('/me', usersController.getAccountDetailsOfCurrentUser);
route.delete('/me', usersController.deleteProfileOfCurrentUser); // pending
route.get('/', usersController.listAlltheUsers); 
route.get('/:search', usersController.search); 
route.get('/profile/:id', usersController.UserProfileById);

module.exports = route;