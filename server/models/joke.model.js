const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [6, "First name must be at least 6 characters long"],
	},
	age: Number
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;