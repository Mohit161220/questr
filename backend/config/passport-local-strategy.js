const passport = require('passport');
const { Strategy } = require('passport-local');
const LocalStrategy = require('passport-local').Strategy;
const USER = require('../models/user');

passport.use(new LocalStrategy({
        usernameField : 'email',
        passReqToCallback : true
    }, async function(req, email, password, done){
        try {
            let user = await USER.findOne({email : email});
            if(!user || user.password != password) {
                return done(null, false);
            } else {
                console.log(`${user.email} signed in!`)
                return done(null, user);
            }
        } catch (error) {
            return done(error);
        }
    }
));

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    return done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    USER.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> passport');
            return done(err);
        }else {
            return done(null, user);
        }
    });
});

// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    // if the user is not signed in
    return res.redirect('/users//sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        console.log('req.user : ', req.user);
    }
    next();
}

module.exports = passport;