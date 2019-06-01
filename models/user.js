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
        "cuisine":String
    }
);

userSchema.methods.validPassword = function(password) {
    return this.password == password;
};
mongoose.model('users',userSchema);