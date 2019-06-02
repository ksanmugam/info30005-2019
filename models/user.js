
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

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
    }
);

userSchema.statics.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

mongoose.model('users',userSchema);
