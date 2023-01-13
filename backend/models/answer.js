const mongoose = require("mongoose")

const answerSchema = mongoose.Schema({
	content: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	usersWhoLike: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	],
	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Question"
	}
},{
    timestamps : true
})

module.exports = mongoose.model("Answer", answerSchema)