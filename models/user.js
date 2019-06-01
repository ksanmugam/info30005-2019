var distributorSchema = require('./distributor.js');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "username":String,
        "password":String,
        "name":String,
        "email":String,
        "address":String,
        "phone":String,
        "rating":String,
        "cuisine":String,
        "posts": [{ type: this.Types.ObjectId, ref: 'distributors' }]
    }
);

userSchema.methods.validPassword = function(password) {
    return this.password == password;
};



mongoose.model('users',userSchema);
mongoose.model('distributors',distributorSchema);
