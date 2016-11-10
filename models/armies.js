var mongoose = require('mongoose');
var armySchema = new mongoose.Schema({
	name: String,
	image: String,
	side: String,
	weapons: Number,
	numbers: Number
});
mongoose.model('army', armySchema);