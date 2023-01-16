const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
	content: {
		type: String,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	},
	topics: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "Topic"
	},
	title : { // title of the question
		type : String,
		required : true
	},
	answers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Answer"
		}
	]
},{
    timestamps :true 
})

module.exports = mongoose.model("Question", questionSchema)