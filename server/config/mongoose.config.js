const mongoose = require("mongoose");
const dbNAME = "jokes_api"

mongoose.connect("mongodb://localhost/"+dbNAME, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));