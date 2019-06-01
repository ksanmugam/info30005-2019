var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var controller = require('../controllers/userController.js');
var distributorController = require('../controllers/distributorController.js');
var ingredientsController = require('../controllers/ingredientsController.js');

// Login
router.post('/login', passport.authenticate('local', { successRedirect: '/tempProfile.html',
                                                       failureRedirect: '/failure'})
);

router.get('/logout', function(req, res){
    res.clearCookie('connect.sid', {path: '/'});
    req.logOut();
    res.redirect('/');
});

// Create new user
router.post('/api/users', controller.createUser);

// Find all users
router.get('/api/users', controller.findAllUsers);

// Find one user by id
router.get('/api/users/id/:id', controller.findOneUser);

// Fine one user by name
router.get('/api/users/name/:name', controller.findUserByName);


// Load Distributors
router.get('/distributors', ensureLoggedIn(), distributorController.getPage);

// Create new distributor
router.post('/api/distributors', distributorController.createDistributor);

// Find all distributors
router.get('/api/distributors', distributorController.findAllDistributors);

// Find all by name of food
router.get('/api/distributors/food_name/:food_name', distributorController.findByFoodName);

// Find distributors by cuisine
router.get('/api/distributors/cuisine/:cuisine', distributorController.findByCuisine);

// Find distributors by ingredient
router.get('/api/distributors/ingredients/:ingredients', distributorController.findByIngredient);

// Find distributors by Name
router.get('/api/distributors/name/:distributor_name', ensureLoggedIn(), distributorController.findByName);


// Create new ingredients
router.post('/api/ingredients', ingredientsController.createIngredient);

// Find all ingredients
router.get('/api/ingredients', ingredientsController.findAllIngredients);

// Find Ingredients by cuisine
router.get('/api/ingredients/cuisine/:cuisine', ingredientsController.findByCuisine);

router.get('/users/login', (req, res) => res.send('Login'));

router.get('/users/register', (req, res) => res.send('Register'));



module.exports = router;



function ensureLoggedIn() {
    return function(req, res, next) {
        // isAuthenticated is set by `deserializeUser()`
        if (!req.isAuthenticated || !req.isAuthenticated()) {
            res.redirect('/login.html');
        } else {
            next()
        }
    }
}
