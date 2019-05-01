var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "name":String,
        "email":String,
        "address":String,
        "phone":String,
        "rating":String,
        "cuisine":String
    }
);
mongoose.model('users',userSchema);