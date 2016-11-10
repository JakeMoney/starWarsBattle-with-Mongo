var mongoose = require('mongoose');

var heroesSchema = new mongoose.Schema({
	name: String,
	image: String,
	side: String,
	power1: {
		name: String,
		gived: Number,
		taked: Number,
		giveh: Number,
		takeh: Number,
		description: String
	},
	power2: {
		name: String,
		gived: Number,
		taked: Number,
		giveh: Number,
		takeh: Number,
		description: String
	}
});

mongoose.model('hero', heroesSchema);


//curl test
//curl --data 'name=test' 'image = test2 side=dark power1= {name=test gived=2 taked=2 giveh=2 takeh=2 description=happy}  power2= {name=test gived=2 taked=2 giveh=2 takeh=2 description=happy}' http://localhost:3005/heroes
