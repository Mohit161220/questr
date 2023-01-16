const express = require('express');
const route = express.Router(); 
const passport = require('passport');
const questionsController = require('../controllers/questions_controller');
const questionAuth = require('../middlewares/question_Auth');
//localhost:8000/questions
route.get('/', questionsController.listAllQuestion); // okay
//localhost:8000/questions/:id
route.get('/:id', questionsController.QuestionById); // here we can append the title of question on url
//localhost:8000/questions/create-question
// this not working
route.post('/create-question',  questionsController.questionValidate, questionsController.createQuestion);
//localhost:8000/questions/topic/:topic
//route.get('/topic/:topic', questionsController.QuestionByTopic);
//localhost:8000/questions/user/:username
route.get('/user/:username', questionsController.QuestionByUsername)
//localhost:8000/questions/:id
route.delete('/:id',  questionsController.removeQuestion); // middleware to be added

module.exports = route;