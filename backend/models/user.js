const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		//required: true
	},
	lastName: {
		type: String,
		//required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	imageName: {
		type: String,
		//required: true
	},
	questions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Question"
		}
	],
	answers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Answer"
		}
	],
	answersLiked: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Answer"
		}
	],
	topics: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Topic"
		}
	],
	topicsFollowed: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Topic"
		}
	]
},{
    timestamps : true
})

module.exports = mongoose.model("User", userSchema)