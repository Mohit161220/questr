const QUESTION = require('../models/question');
const USER = require('../models/user');
const ANSWER = require('../models/answer');

module.exports.home = async function(req, res){
    console.log('inside the homecontroller home');
    try { 
        // need to add sorting according to the highest rated question.
        const questions = await QUESTION.find({});
        return res.status(200).json(questions);
    } catch (error) {
        console.log('*****error in homeController', error);
        return;
    }
}
