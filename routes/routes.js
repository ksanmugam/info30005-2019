var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');
var distributorController = require('../controllers/distributorController.js');

// Create new user
router.post('/api/users', controller.createUser);

// Find all users
router.get('/api/users', controller.findAllUsers);

// Find one user by id
router.get('/api/users/id/:id', controller.findOneUser);

// Fine one user by name
router.get('/api/users/name/:name', controller.findUserByName);




// Create new distributor
router.post('/api/distributors', distributorController.createDistributor);

// Find all distributors
router.get('/api/distributors', distributorController.findAllDistributors);

// Find distributors by cuisine
router.get('/api/distributors/cuisine/:cuisine', distributorController.findByCuisine);

// Fine distributors by ingredient
router.get('/api/distributors/ingredient/:ingredient', distributorController.findByIngredient);


module.exports = router;