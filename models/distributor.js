var mongoose = require('mongoose');

var distributorSchema = mongoose.Schema(
    {
    	"name":String,
        "email":String,
        "address":String,
        "phone":String,
        "rating":String,
        "cuisine":String,
        "food_name":Array,
        "ingredients":Array,
        "portion_size":String,
        "allergens":String,
        "price":String
    }
);
mongoose.model('distributors',distributorSchema);