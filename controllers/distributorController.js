var distributors= [];

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
        if (users[i].cuisine == req.params.cuisine) {
            res.send(users[i]);
        }
    }
};

var findByIngredient = function(req, res) {
    for (var i = 0; i < distributors.length; i++) {
        if((users[i].ingredients).includes(req.params.ingredients)) {
            res.send(users[i]);
        }
    }
}

module.exports.createDistributor = createDistributor;
module.exports.findAllDistributors = findAllDistributors;
module.exports.findByIngredient = findByIngredient;
module.exports.findByCuisine = findByCuisine;