const USER = require('../models/user');
const QUESTION = require('../models/question');
const ANSWER = require('../models/answer');

module.exports.signUp = async function(req, res){
    // users sign up will be done
    try {
        if(req.body.password != req.body.confirm_password){
            return res.status(401).json({
                message : 'password and confirm password do not match'
            });
        }
        let user = await USER.findOne({email : req.body.email});
        if(user){
            console.log('user already exist');
            return res.redirect('back');
        } else if(!user){
            let user = USER.create(req.body);
            if(user){
                console.log('Sign up completed');
            }
            return res.status(200).json({
                message : 'user signed up successfully'
            });
            // return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log('error in signing up', error);
        return;
    }
}

module.exports.signIn = async function(req, res){
     // users sign in will be done
     console.log('SignIn successfull');
    //  return res.redirect('/');
    return res.json({message:true})
}

module.exports.signOut = async function(req, res){
    // Users sign out will be done
    console.log(`${req.email} signed out!`)
    req.logout();
    return res.redirect('/users/sign-in');
}

module.exports.getAccountDetailsOfCurrentUser = async function(req, res){ // catch async ??
    // Get User Details --Logged In User
    try {
        // also why do we need to populate ?
        // we also need to populate so as to get questions, answer, answersliked by the user.
        let user = await USER.findById(req.user.id);
        return res.status(200).json({
            success : true,
            user
        });
    } catch (error) {
        console.log('*****error in getAccountDetailsOfCurrentUsers', error);
        return;
    }
}

module.exports.deleteProfileOfCurrentUser = async function(req, res){ // catch async ??
    // Delete Profile -- logged in user
    // if we are to delete the user then we need to delete each and every question, answer, answerliked etc by him.
}

module.exports.listAlltheUsers = async function(req, res){
    console.log('In users controller --> list all users');
    try {
        let allUsers = await USER.find({});
        return res.status(200).json({
            success : true,
            allUsers
        });
    } catch (error) {
        console.log('*****error in list all Users', error);
        return;
    }
}

module.exports.search = async function(req, res){
    console.log('In users controller --> search user');
    try {
        let users = await USER.find({
            username : {
                $regex : req.params.search,
                $options : 'i'
            }
        });
        return res.status(200).json(users);
    } catch (error) {
        console.log('*****error in users search', error);
        return;
    }
}

module.exports.UserProfileById = async function(req, res){
    console.log('In users controller --> UserProfileById');
    try {
        let user = await USER.findById(req.params.id);
        console.log('user :>>> ', user);
        return res.status(200).json(user);
    } catch (error){
        console.log('*****error in userProfileById', error);
        return;
    }
}
