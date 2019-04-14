var distributors= [
    {   "name": "Matthew Sy",
        "email": "matthewpesy@yahoo.com",
        "address": "87 Franklin St",
        "phone": "0432501567",
        "rating": "5",
        "cuisine": "Italian",
        "food_name": ["Pasta", "Macaroni", "Pizza"],
        "ingredients": ["Cheese", "Bread", "Noodles"],
        "portion_size": "2 servings",
        "allergens": "Dairy",
        "price": "3AUD"
    }
];

var createDistributor = function(req, res) {
    var newDistributor = {
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
    };

    distributors.push(newDistributor);
    res.send(newDistributor);

};

var findAllDistributors = function(req, res) {
    res.send(distributors);
};


var findByCuisine = function(req, res) {
    for (var i = 0; i < distributors.length; i++) {
        if (distributors[i].cuisine == req.params.cuisine) {
            res.send(distributors[i]);
        }
    }
};

var findByFoodName = function(req, res) {
    for (var i = 0; i < distributors.length; i++) {
        if (distributors[i].food_name == req.params.food_name) {
            res.send(distributors[i]);
        }
    }
};

var findByIngredient = function(req, res) {
    for (var i = 0; i < distributors.length; i++) {
        for (var k = 0; k < (distributors[i].ingredients).length; k++) {
            if (distributors[i].ingredients[k] == req.params.ingredients) {
                res.send(distributors[i]);
                break;
            }
        }
    }
}

module.exports.createDistributor = createDistributor;
module.exports.findAllDistributors = findAllDistributors;
module.exports.findByFoodName = findByFoodName;
module.exports.findByIngredient = findByIngredient;
module.exports.findByCuisine = findByCuisine;
