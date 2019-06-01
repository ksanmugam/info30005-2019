var mongoose = require('mongoose');
var Distributor = mongoose.model('distributors');

var createDistributor = function(req, res) {
    var distributor = new Distributor({
        "name": req.body.name,
        "email": req.body.email,
        "address": req.body.address,
        "phone": req.body.phone,
        "rating": req.body.rating,
        "cuisine": req.body.cuisine,
        "food_name": req.body.food_name,
        "ingredients": req.body.ingredients,
        "portion_size": req.body.portion_size,
        "allergens": req.body.allergens,
        "price": req.body.price
    });
    distributor.save(function(err, newDistributor){
    	if(!err){
			//res.send(newDistributor);
			return res.json({ status: "success"});
    	} else {
    		res.sendStatus(400);
    	}
    });
};

var getPage = function(req, res) {
	if (req.session.user) {
		//console.log(req.session.user);
		res.render('addDistributor', {
			nameValue: req.session.user.name,
			emailValue: req.session.user.email,
			addressValue: req.session.user.email,
			phoneValue: req.session.user.phone,
			ratingValue: req.session.user.rating,
			cuisineValue: req.session.user.cuisine
		});
	}
	else {
		res.render('addDistributorEmpty');
	}
};

//returns all distributors
var findAllDistributors = function(req, res) {
	Distributor.find(function(err,distributors){
        if(!err){
            res.send(distributors);
        } else{
            res.sendStatus(404);
        }
    });
};

//returns distributor with specified cuisine
var findByCuisine = function(req, res) {
	var cuisines = req.params.cuisine;
    Distributor.find({cuisine:cuisines}, function(err,distributors){
    	if(!err){
			res.send(distributors);
    	} else {
    		res.sendStatus(500);
    	}
    });
};

//returns distributor with specific food on offer
var findByFoodName = function(req, res) {
	var foodname = req.params.food_name;
	Distributor.find({food_name:foodname}, function(err,distributors){
		if(!err){
			res.send(distributors);
		} else {
			res.sendStatus(500);
		}
	});
};

//returns all ditributors whose food contains the specified ingredient
var findByIngredient = function(req, res) {
	var ingredient = req.params.ingredients;
	Distributor.find({ingredients:ingredient}, function(err,distributors){
		if(!err){
			res.send(distributors);
		} else {
			res.sendStatus(500);
		}
	});
};

var removeDistributor = function(req, res) {
	var nameToRemove = req.params.name;
	Distributor.deleteOne({name: nameToRemove});
};


module.exports.createDistributor = createDistributor;
module.exports.findAllDistributors = findAllDistributors;
module.exports.findByFoodName = findByFoodName;
module.exports.findByIngredient = findByIngredient;
module.exports.findByCuisine = findByCuisine;
module.exports.getPage = getPage;
module.exports.removeDistributor = removeDistributor;