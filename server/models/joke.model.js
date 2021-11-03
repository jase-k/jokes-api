const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "You can't have a joke without a set-up!"],
		minlength: [10, "Eh, I'm not sure that setup was long enough. Go for at least 10 characters"],
	},
	punchline: {
		type: String,
		required: [true, "You can't have a joke without a punchline"],
		minlength: [3, "Seems like too short of a punchline. You sure you filled that out correctly?"]
	}
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;