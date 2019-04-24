// Create database
var mongoose = require('mongoose');
var dbPasswd = "passw0rd%21%0D%0A";

const options = {
		useNewUrlParser: true,
		dbName: "Cluster0"
};

//mongodb+srv://ksanmugam:<password>@cluster0-5wuh3.mongodb.net/test?retryWrites=true
mongoose.connect('mongodb+srv://ksanmugam:passw0rd%21%0D%0A@cluster0-5wuh3.mongodb.net/test?retryWrites=true', options).then(
	() => {
		console.log("Connected to mongo");
	},
	err => {
		console.log("Failed to connect to mongo");
	}
);

require('./schema.js');
