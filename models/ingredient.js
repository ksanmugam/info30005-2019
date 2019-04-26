var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema(
    {
		"food_name":String,
	    "cuisine":String,
	    "allergens":String,
	    "price":String
    }
);
mongoose.model('ingredients',ingredientSchema);