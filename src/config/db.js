const mongoose = require("mongoose");

const connect = async () => {
	return mongoose.connect(
		"mongodb+srv://top-survey:12345@cluster0.pm1r73y.mongodb.net/test"
	);
};

module.exports = connect;
