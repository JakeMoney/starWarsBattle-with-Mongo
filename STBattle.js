
var varService = angular.module('varService',[]);
var app = angular.module('STBattle', ['ui.router','varService']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('menu', {
			url: '/menu',
			templateUrl: '/menu.html',
			controller: 'menuCtrl'
		})
		.state('prep', {
			url: '/prep',
			templateUrl: '/prep.html',
			controller: 'prepCtrl'
		})
		.state('army', {
			url: '/army',
			templateUrl: '/army.html',
			controller: 'armyCtrl'
		})
		.state('hero', {
			url: '/hero',
			templateUrl: '/hero.html',
			controller: 'heroCtrl'
		})
		.state('battle', {
			url: '/battle',
			templateUrl: '/battle.html',
			controller: 'battleCtrl'
		});
	$urlRouterProvider.otherwise('menu');
}]);

varService.service('gameVars', function()
{
	var forceChoice = "";

	var armies = {
		CloneTroopers: {
			name: "Clone Troopers",
			image: "images/clones2.jpg",
			side: "light",
			weapons: 5,
			numbers: 8
		},
		WookieWarriors: {
			name: "Wookie Warriors",
			image: "images/wookie.jpg",
			side: "light",
			weapons: 10,
			numbers: 4
		},
		ConfederateDroids: {
			name: "Confederate Droids",
			image: "images/droid.jpg",
			side: "dark",
			weapons: 6,
			numbers: 6
		},
		MandalorianWarriors:{
			name: "Mandalorian Warriors",
			image: "images/Mandalorians.jpg",
			side: "dark",
			weapons: 10,
			numbers: 4
		},
		Rebels:{
			name: "Rebels",
			image: "images/rebel.jpg",
			side: "light",
			weapons: 6,
			numbers: 8
		},
		Imperials:{
			name: "Imperials",
			image: "images/stormtroopers2.jpg",
			side: "dark",
			weapons: 10,
			numbers: 5
		}
	};
	var heros = {
		DarthVader : {
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
		},
		LukeSkywalker :{
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
		},
		GeneralGrevious :{
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
		},
		DarthMaul :{
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
		},
		Yoda :{
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
		},
		ObiWan :{
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
		}
	};

	var heroSelect = {
		name: "",
		image: "",
		side: "",
		power1: null,
		power2: null
	};

	var armySelect = {
		name: "",
		image: "",
		side: "",
		weapons: 0,
		numbers: 0
	};

	var abilities = {
		ForceHeal: {
			name: "Force Heal",
			gived: 0,
			taked: 0,
			giveh: 25,
			takeh: 0,
			description: "Use the force to heal wounded soliders"
		},
		ForceLightning: {
			name: "Force Lightning",
			gived: 0,
			taked: 0,
			giveh: 0,
			takeh: 30,
			description: "Use the force to unleash devastation on the enemy soliders"
		},
		Inspire: {
			name: "Inspire",
			gived: 2,
			taked: 0,
			giveh: 20,
			takeh: 0,
			description: "Inspire your soliders.  They gain more attack."
		},
		LoomingPresence: {
			name: "Looming Presence",
			gived: 0,
			taked: 3,
			giveh: 0,
			takeh: 10,
			description: "The enemy soliders are terrified by your arrival.  They lose attack and some troops cower."
		},
		ForceBlast: {
			name: "Force Blast",
			gived: 0,
			taked: 1,
			giveh: 0,
			takeh: 15,
			description: "Use the force to push back all enemy soliders."
		}
	};

	this.getAllPowers = function()
	{
		return abilities;
	}

	this.addHero =function(name, hero)
	{
		name = name.replace(/\s+/, "");
		heros[name] = hero;
		heros[name].power1 = hero.power1;
		heros[name].power2 = hero.power2;
	};

	this.getHero = function(name)
	{
		return heros[name];
	};

	this.getAllHeros = function()
	{
		return heros;
	};

	this.addArmy = function(name, army)
	{
		armies[name] = army;
	};

	this.getAllArmies = function()
	{
		return armies;
	};

	this.getArmy = function(name)
	{
		return armies[name];
	};

	this.getCurForcChoice = function()
	{
		return forceChoice;
	};
	this.setCurForceChoice = function(choice)
	{
		if(choice ===1)
		{
			forceChoice = "light";
		}
		else
		{
			forceChoice = "dark";
		}
	};
	this.getCurHero = function()
	{
		return heroSelect;
	};
	this.setCurHero = function(inName)
	{
		inName = inName.replace(/\s+/, "");
		heroSelect.name = heros[inName].name;
		heroSelect.image = heros[inName].image;
		heroSelect.side = heros[inName].side;
		heroSelect.power1 = heros[inName].power1;
		heroSelect.power2 = heros[inName].power2;
	};
	this.getCurArmy = function()
	{
		return armySelect;
	};
	this.setCurArmy = function(inName)
	{
		inName = inName.replace(/\s+/, "");
		armySelect.name = armies[inName].name;
		armySelect.image = armies[inName].image;
		armySelect.side = armies[inName].side;
		armySelect.weapons = armies[inName].weapons;
		armySelect.numbers = armies[inName].numbers;
	};
	this.getAbility = function(name)
	{
		name = name.replace(/\s+/, "");
		return abilities[name];
	};
});

app.filter('side', function(gameVars)
{
	return function(array)
	{
		var sideCheck = gameVars.getCurForcChoice();
		var filtered = [];

		angular.forEach(array, function(object){
			if(object.side === sideCheck)
			{
				filtered.push(object);
			}
		});

		return filtered;
	}
});

app.controller('menuCtrl',function($scope, gameVars)
{
	$scope.chooseLight = function()
	{
		gameVars.setCurForceChoice(1);
		gameVars.setCurHero("LukeSkywalker");
		gameVars.setCurArmy("Rebels");
	};

	$scope.chooseDark = function()
	{
		gameVars.setCurForceChoice(2);
		gameVars.setCurHero("DarthVader");
		gameVars.setCurArmy("Imperials");
	};
});

app.controller('prepCtrl',function($scope,gameVars)
{
	$scope.hero = gameVars.getCurHero();

	$scope.heroName = $scope.hero.name;
	$scope.heroImage = $scope.hero.image;
	$scope.heroPower1 = $scope.hero.power1.name;
	$scope.heroPower2 = $scope.hero.power2.name;

	$scope.army = gameVars.getCurArmy();

	$scope.armyName = $scope.army.name;
	$scope.armyImage = $scope.army.image;
	$scope.armyWeapon = $scope.army.weapons;
	$scope.armySize = $scope.army.numbers;

	$scope.side = gameVars.getCurForcChoice();
});

app.controller('armyCtrl',function($scope,gameVars)
{

	$scope.armies = gameVars.getAllArmies();
	$scope.curSide = gameVars.getCurForcChoice();

	$scope.updateArmyChoice = function(army)
	{
		army.name;
		gameVars.setCurArmy(army.name);
	}

	$scope.addNewArmy = function(data)
	{
		$scope.newimage = "";
		$scope.curSide = gameVars.getCurForcChoice();
		if(data.image ===undefined)
		{
			if($scope.curSide === "dark")
			{
				$scope.newimage = "images/defaultbad.jpg";
			}
			else
			{
				$scope.newimage = "images/defaultgood.jpg";
			}
		}
		else
		{
			$scope.newimage = data.image;
		}

		newArmy = {
			name: data.name,
			image: $scope.newimage,
			side: $scope.curSide,
			weapons: data.weapon,
			numbers: data.size
		};
		gameVars.addArmy(data.name,newArmy);
	}
});

app.controller('heroCtrl', function($scope, gameVars)
{
	$scope.heros = gameVars.getAllHeros();
	$scope.curSide = gameVars.getCurForcChoice();
	$scope.powers = gameVars.getAllPowers();

	$scope.updateHeroChoice = function(hero)
	{
		hero.name;
		gameVars.setCurHero(hero.name);
	}

	$scope.addNewHero = function(data)
	{
		$scope.newimage = "";
		$scope.curSide = gameVars.getCurForcChoice();
		if(data.image ===undefined)
		{
			if($scope.curSide === "dark")
			{
				$scope.newimage = "images/defaultsith.jpg";
			}
			else
			{
				$scope.newimage = "images/defaultjedi.jpg";
			}
		}
		else
		{
			$scope.newimage = data.image;
		}

		var newAbility1 = gameVars.getAbility(data.ability1);
		var newAbility2 = gameVars.getAbility(data.ability2);
		newHero = {
			name: data.name,
			image: $scope.newimage,
			side: $scope.curSide,
			power1: newAbility1,
			power2: newAbility2
		};
		gameVars.addHero(data.name,newHero);
	}
});

app.controller('battleCtrl', function($scope , gameVars)
{
	$scope.curPlayer = {
		hero: gameVars.getCurHero(),
		army: gameVars.getCurArmy(),
		control: "player"
	};

	$scope.side = gameVars.getCurForcChoice();
	$scope.menulink = "";

	var playerside = gameVars.getCurForcChoice();
	if(playerside === "dark")
	{
		$scope.dark = $scope.curPlayer;
		$scope.light = {
			hero: gameVars.getHero("LukeSkywalker"),
			army: gameVars.getArmy("Rebels"),
			control: "bot"
		};
	}
	else
	{
		$scope.light = $scope.curPlayer;
		$scope.dark = {
			hero: gameVars.getHero("DarthVader"),
			army: gameVars.getArmy("Imperials"),
			control: "bot"
		};
	}

	$scope.curMessage = "start attacking to begin the battle!";
	$scope.power1 = "";
	$scope.power2 = "";
	$scope.lightLife = ($scope.light.army.numbers * 10);
	$scope.darkLife = ($scope.dark.army.numbers * 10);
	$scope.test = 10;
	var charges = 2;

	$scope.phase = function()
	{
		$scope.curMessage = "";
		$scope.lightLife = $scope.lightLife - $scope.dark.army.weapons;
		$scope.darkLife = $scope.darkLife - $scope.light.army.weapons;
		if($scope.lightLife < 0)
		{
			$scope.lightLife =0;
		}

		if($scope.darkLife < 0)
		{
			$scope.darkLife =0;
		}

		if($scope.darkLife ===0 ||$scope.lightLife ===0 )
		{
			$scope.curMessage = "Game over!"
			$scope.menulink = "Return to Main Menu";
		}
		else if($scope.lightLife < 50 && charges !== 0)
		{
			$scope.curMessage = "Select an ability to use!";
			$scope.power1 = $scope.curPlayer.hero.power1.name;
			$scope.power2 = $scope.curPlayer.hero.power2.name;;
			charges = charges - 1;
			if($scope.darkLife ===0 ||$scope.lightLife ===0 )
			{
				$scope.curMessage = $scope.curMessage  + " Game over!"
				$scope.menulink = "Return to Main Menu";
			}
			else
			{
				$scope.curMessage = $scope.curMessage  + " The battle continues!";
			}
		}
		else
		{
			$scope.curMessage = $scope.curMessage  + " The battle continues!";
		}

	}

	$scope.usePower1 = function()
	{

		$scope.curMessage = $scope.power1 + " used!";
		$scope.power1 = "";
		$scope.power2 = "";
		usePower($scope.curPlayer.hero.power1,  $scope.side);
	}

	$scope.usePower2 = function()
	{

		$scope.curMessage = $scope.power2 + " used!";
		$scope.power1 = "";
		$scope.power2 = "";
		usePower($scope.curPlayer.hero.power2, $scope.side);
	}

	var usePower = function(power, player)
	{
		if(player === "dark")
		{
			$scope.darkLife = $scope.darkLife + power.giveh;
			$scope.lightLife = $scope.lightLife - power.takeh;
			$scope.dark.army.weapons = $scope.dark.army.weapons + power.gived;
			$scope.light.army.weapons = $scope.light.army.weapons - power.taked;
			if($scope.lightLife < 0)
			{
				$scope.lightLife =0;
			}

			if($scope.darkLife < 0)
			{
				$scope.darkLife =0;
			}
		}
		else
		{
			$scope.darkLife = $scope.darkLife - power.takeh;
			$scope.lightLife = $scope.lightLife + power.giveh;
			$scope.dark.army.weapons = $scope.dark.army.weapons - power.taked;
			$scope.light.army.weapons = $scope.light.army.weapons + power.gived;
			if($scope.lightLife < 0)
			{
				$scope.lightLife =0;
			}

			if($scope.darkLife < 0)
			{
				$scope.darkLife =0;
			}
		}
	}

});
