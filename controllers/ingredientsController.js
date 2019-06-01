var mongoose = require('mongoose');
var Ingredient = mongoose.model('ingredients');

// create ingredient format
var createIngredient = function(req, res) {
    var ingredient = new Ingredient ({
        "food_name": req.body.food_name,
        "cuisine": req.body.cuisine,
        "allergens": req.body.allergens,
        "price": req.body.price
    });
    ingredient.save(function(err, newIngredient){
    	if(!err){
    		res.send(newIngredient);
    	} else {
    		res.sendStatus(400);
    	}
    });
};

// find ingredients and return all
var findAllIngredients = function(req,res) {
	Ingredient.find(function(err,ingredients){
		if(!err){
			res.send(ingredients);
		} else {
			res.sendStatus(404);
		}
	});
};


var getPage = function(req, res) {
    res.render('ingredients');
};

// find specific cuisine and returns info
var findByCuisine = function(req, res) {
	var ingredientName = req.params.name;
    Ingredient.find({name:ingredientName},function(err,user){
        if(!err){
            res.send(ingredientName);
        } else{
            res.sendStatus(404);
        }
    });
};

module.exports.createIngredient = createIngredient;
module.exports.findAllIngredients = findAllIngredients;
module.exports.findByCuisine = findByCuisine;
module.exports.getPage = getPage;