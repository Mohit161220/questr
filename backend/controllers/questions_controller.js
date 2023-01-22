const QUESTION = require('../models/question');
const USER = require('../models/user');
const ANSWER = require('../models/answer');
const {body, validationResult} = require('express-validator');

/*
module.exports.question = async function(req, res, next, id){
    console.log('In question controller --> question');
    try {
        const question = await QUESTION.findById(id);
        if(!question) {
            return res.status(404).json({
                message : 'Question not found'
            })
        }
        req.question = question;
    } catch (error) {
        if(error.name == 'CastError'){
            return res.status(400).json({
                message : 'Invalid Question id'
            });
        }
        return;
    }
    next();
};
*/

module.exports.listAllQuestion = async function(req, res){
    console.log('In question controller --> list all question');
    try { 
        // need to add sorting according to the highest rated question.
        const questions = await QUESTION.find({});
        // also we can populate the who asked the question
        return res.status(200).json(questions);
    } catch (error) {
        console.log('*****error in list all Question', error);
        return;
    }
}

module.exports.QuestionById = async function(req, res){
    console.log('In question controller --> QuestionById');
    try {
        const id = req.params.id; 
        console.log(req.params.id);
        const question = await QUESTION.findById(id).populate('answers');
        console.log(question)
        // here we also can add who asked the question and who answered it by populating
        return res.status(200).json(question);
    } catch (error) {
        console.log('*****error in show Question', error);
        return;
    }
}

module.exports.createQuestion = async function(req, res){
    console.log('In question controller --> create question');
    const result = validationResult(req);
    if(!result.isEmpty()){
        const errors = result.array({onlyFirstError : true});
        return res.status(422).json({
            errors
        });
    }
    try {
        //const {title, topics, content} = req.body;
        const {title, content} = req.body;

        const user = req.user.id;
        const question = await QUESTION.create({
            title,
            user,
            // topic,
            content
        });
        return res.status(200).json({
            message : 'question created',
            question
        });
    } catch (error) {
        console.log('*****error in create Question', error);
        return;
    }
}

// module.exports.QuestionByTopic = async function(req, res){
//     console.log('In question controller --> QuestionByTopic');
//     try {
//         const Topic = req.params;
//         console.log(req.params);
//         console.log(Topic);
//         let questions = await QUESTION.find({
//             topic : {
//                 $all : Topic
//             }
//         })
//         .sort();
//         return res.status(200).json(questions);
//     } catch (error) {
//         console.log('*****error in QuestionByTopic', error);
//         return;
//     }
// }

module.exports.QuestionByUsername = async function(req, res){
    console.log('In question controller --> QuestionByUsername');
    try {
        console.log(req.params);
        const username = req.params;
        const user = await USER.findOne(username);
        console.log('*******************', user)
        const questions = await QUESTION.find({
            user : user._id
        }).limit(10);
        return res.status(200).json(questions);
    } catch (error) {
        console.log('*****error in QuestionByUsername', error);
        return;
    }
}

module.exports.removeQuestion = async function(req, res){
    console.log('In question controller --> remove question');
    try {
        let question = await QUESTION.findById(req.params.id);
        console.log('**************', question);
        console.log('____________', req.user);
        if(question.user == req.user.id){
            // we will first delete all the answer related to the question and all the likes and upvote if any.
            question.remove();
            await ANSWER.deleteMany({
                question : req.params.id
            });
            return res.status(200).json({
                message : 'Post deleted'
            });
        }
        console.log('user not allowed +++++++++++++++++++++++++++++');
        return res.redirect('back');
    } catch (error) {
        console.log('*****error in removeQuestion', error);
        return;
    }
}

module.exports.questionValidate = [

    body('title')
        .exists()
        .trim()
        .withMessage('is must')
        
        .notEmpty()
        .withMessage('cannot be blank')
        
        .isLength({max : 150})
        .withMessage('must be at most 180 char long'),

    body('content')
        .exists()
        .trim()
        .withMessage('is required')
        
        .isLength({ min: 10 })
        .withMessage('must be at least 10 characters long')
        
        .isLength({ max: 5000 })
        .withMessage('must be at most 5000 characters long'),
    
    // body('topics')
    //     .exists().withMessage('is required')
]