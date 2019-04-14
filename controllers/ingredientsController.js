var ingredients= [];

var createIngredient = function(req, res) {
    var newFoodLookUp = {
        "food_name": req.body.food_name,
        "cuisine": req.body.cuisine,
        "allergens": req.body.allergens,
        "price": req.body.price
    };

    ingredients.push(newFoodLookUp);
    res.send(newFoodLookUp);

};

var findAllIngredients = function(req,res) {
    res.send(ingredients);
};

var findByCuisine = function(req, res) {
    for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i].cuisine == req.params.cuisine) {
            res.send(ingredients[i]);
        }
    }
};


module.exports.createIngredient = createIngredient;
module.exports.findAllIngredients = findAllIngredients;
module.exports.findByCuisine = findByCuisine;