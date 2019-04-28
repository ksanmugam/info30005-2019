var mongoose = require('mongoose');
var Distributor = mongoose.model('distributors');

var createDistributor = function(req, res) {
    var distributor = new Distributor ({
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
    		res.send(newDistributor);
    	} else {
    		res.sendStatus(400);
    	}
    });
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
//	for (var i = 0; i < distributors.length; i++) {
//        if (distributors[i].cuisine == req.params.cuisine) {
//            res.send(distributors[i]);
//        }
//    }
//};

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
//    for (var i = 0; i < distributors.length; i++) {
//        if (distributors[i].food_name == req.params.food_name) {
//            res.send(distributors[i]);
//        }
//    }
//};

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
//    for (var i = 0; i < distributors.length; i++) {
//        if((distributors[i].ingredients).includes(req.params.ingredients)) {
//            res.send(distributors[i]);
//        }
//    }
//}


module.exports.createDistributor = createDistributor;
module.exports.findAllDistributors = findAllDistributors;
module.exports.findByFoodName = findByFoodName;
module.exports.findByIngredient = findByIngredient;
module.exports.findByCuisine = findByCuisine;