//Fake ingredients list. Will be implementing a database for the next part of the project.
var ingredients= [
    {
        "food_name": "Fillet Mignon",
        "cuisine": "English Food",
        "allergens": "Contains Meat",
        "price": "AUD$31.50/kg"
    } ,
    {
        "food_name": "CharSiew",
        "cuisine": "Asian",
        "allergens": "Contains Meat",
        "price": "AUD$8.00/kg"
    }
];

// create ingredient format
var ingredient = function(req, res) {
    var newFoodLookUp = {
        "food_name": req.body.food_name,
        "cuisine": req.body.cuisine,
        "allergens": req.body.allergens,
        "price": req.body.price
    };

    ingredients.push(newFoodLookUp);
    res.send(newFoodLookUp);

};

// find ingredients and return all
var findAllIngredients = function(req,res) {
    res.send(ingredients);
};

// find specific cuisine and returns info
var findByCuisine = function(req, res) {
    for (var i = 0; i < ingredients.length; i++) {
        if (ingredients[i].cuisine == req.params.cuisine) {
            res.send(ingredients[i]);
        }
    }
};

module.exports.ingredient = ingredient;
module.exports.findAllIngredients = findAllIngredients;
module.exports.findByCuisine = findByCuisine;