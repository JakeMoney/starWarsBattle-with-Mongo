var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var hero = mongoose.model('hero');
var army = mongoose.model('army');


router.get('/armies',function(req, res, next)
{
	army.find(function(err, armies)
	{
		if(err)
		{
			return next(err);
		}
		res.json(armies)
	});
});

router.post('/armies', function(req, res, next)
{
	var nextArmy = new army(req.body);
	nextArmy.save(function(err, data)
	{
		if(err)
		{
			return next(err);
		}
		console.log(data);
		res.json(data);
	});
});

router.param('army', function(req, res, next, id)
{
	var query = army.findById(id);
	query.exec(function (err, returnArmy)
	{
		if (err)
		{
			return next(err);
		}
		if (!returnArmy)
		{
			return next(new Error("can't find army"));
		}
		req.army = returnArmy;
		return next();
	});
});

router.get('/armies/:army', function(req, res) 
{
	res.json(req.army);
});

router.delete('/armies/:army', function(req, res) 
{
	console.log("in Delete");
	req.army.remove();
	res.json(req.army);
});

router.get('/heroes', function(req, res, next) 
{
	console.log("In get heroes");
	hero.find(function(err, heroes)
	{
		if(err)
		{ 
			return next(err); 
		}
		res.json(heroes);
	});
});

router.post('/heroes',function(req,res,next)
{
	console.log("in post");
	var nextHero = new hero(req.body);
	
	nextHero.save(function(err, hero)
	{
		if(err)
		{
			return next(err);
		}
		console.log(hero);
		res.json(hero);
	});

});

router.param('hero',function(req, res, next, id)
{
	var query = hero.findById(id);
	query.exec(function(err, returnHero)
	{
		if(err)
		{
			console.log("err");
			return next(err);
			
		}
		if(!returnHero)
		{
			console.log("!returnHero");
			return next(new Error("Can't find hero"));
			
		}
		console.log("good");
		console.log(returnHero);
		req.returnHero = returnHero;
		return next();
	});
});

router.get('/heroes/:hero', function(req,res)
{
	console.log("in id get");
	console.log(req.returnHero);
	res.json(req.returnHero);
});


router.delete('/heroes/:hero',function(req,res)
{
	console.log("in delete");
	console.log("req.returnHero: ");
	console.log(req.returnHero);
	req.returnHero.remove();
	res.json(req.returnHero);
	
});


router.delete('/resetHeros',function(req,res)
{
	console.log("in resetHeros");
	hero.remove({},function(err,numberRemoved)
	{
		console.log("inside remove call back" + numberRemoved);
	});
	
});

router.delete('/resetArmies',function(req,res)
{
	console.log("in resetArmies");
	army.remove({},function(err,numberRemoved)
	{
		console.log("inside remove call back" + numberRemoved);
	});
});


/*
router.initHeroes('/heroes',function(req,res,next)
{
	
	
});


this.dbAddHero = function(newHero)
	{
		$http.post('/heroes', newHero).success(function(data)
		{
			console.log(data);
		});
	}
	
	this.initStartingHeroes = function()
	{
		DarthVader = {
			name: "Darth Vader",
			image: "images/vader.jpg",
			side: "dark",
			power1:{
				name: "Looming Presence",
				gived: 0,
				taked: 3,
				giveh: 0,
				takeh: 10,
				description: "The enemy soliders are terrified by your arrival.  They lose attack and some troops cower."
			},
			power2:{
				name: "Force Blast",
				gived: 0,
				taked: 1,
				giveh: 0,
				takeh: 15,
				description: "Use the force to push back all enemy soliders."
			}
		};
		LukeSkywalker = {
			name: "Luke Skywalker",
			image: "images/luke.jpg",
			side: "light",
			power1: {
				name: "Force Heal",
				gived: 0,
				taked: 0,
				giveh: 25,
				takeh: 0,
				description: "Use the force to heal wounded soliders"
			},
			power2:{
				name: "Inspire",
				gived: 2,
				taked: 0,
				giveh: 20,
				takeh: 0,
				description: "Inspire your soliders.  They gain more attack."
			}
		};
		GeneralGrevious = {
			name: "General Grevious",
			image: "images/grevious.jpg",
			side: "dark",
			power1: {
				name: "Looming Presence",
				gived: 0,
				taked: 3,
				giveh: 0,
				takeh: 10,
				description: "The enemy soliders are terrified by your arrival.  They lose attack and some troops cower."
			},
			power2:{
				name: "Inspire",
				gived: 2,
				taked: 0,
				giveh: 20,
				takeh: 0,
				description: "Inspire your soliders.  They gain more attack."
			}
		};
		DarthMaul = {
			name: "Darth Maul",
			image: "images/maul.jpg",
			side: "dark",
			power1: {
				name: "Looming Presence",
				gived: 0,
				taked: 3,
				giveh: 0,
				takeh: 10,
				description: "The enemy soliders are terrified by your arrival.  They lose attack and some troops cower."
			},
			power2:{
				name: "Force Lightning",
				gived: 0,
				taked: 0,
				giveh: 0,
				takeh: 30,
				description: "Use the force to unleash devastation on the enemy soliders"
			}
		};
		Yoda = {
			name: "Yoda",
			image: "images/yoda.jpg",
			side: "light",
			power1: {
				name: "Inspire",
				gived: 2,
				taked: 0,
				giveh: 20,
				takeh: 0,
				description: "Inspire your soliders.  They gain more attack."
			},
			power2:{
				name: "Force Blast",
				gived: 0,
				taked: 1,
				giveh: 0,
				takeh: 15,
				description: "Use the force to push back all enemy soliders."
			}
		};
		ObiWan = {
			name: "Obi Wan",
			image: "images/kenobi.jpg",
			side: "light",
			power1: {
				name: "Inspire",
				gived: 2,
				taked: 0,
				giveh: 20,
				takeh: 0,
				description: "Inspire your soliders.  They gain more attack."
			},
			power2:{
				name: "Force Heal",
				gived: 0,
				taked: 0,
				giveh: 25,
				takeh: 0,
				description: "Use the force to heal wounded soliders"
			}
		};
		
		this.dbAddHero(ObiWan);
		this.dbAddHero(Yoda);
		this.dbAddHero(LukeSkywalker);
		this.dbAddHero(DarthMaul);
		this.dbAddHero(DarthVader);
		this.dbAddHero(GeneralGrevious);
	};


*/




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
