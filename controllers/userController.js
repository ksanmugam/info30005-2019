var mongoose = require('mongoose');
var User = mongoose.model('users');

var createUser = function(req, res) {
    var user = new User ({
        "name": req.body.name,
        "email": req.body.email,
        "address": req.body.address,
        "phone": req.body.phone,
        "rating": req.body.rating,
        "cuisine": req.body.cuisine
    });
    user.save(function(err, newUser){
    	if(!err){
    		res.send(newUser);
    	} else {
    		res.sendStatus(400);
    	}
    });
};

//returns all users
var findAllUsers = function(req, res) {
	User.find(function(err,users){
        if(!err){
            res.send(users);
        } else{
            res.sendStatus(404);
        }
    });
};

//return one user based on specified id
var findOneUser = function(req, res) {
	var userInx = req.params.id;
    User.findById(userInx,function(err,user){
        if(!err){
            res.send(user);
        } else{
            res.sendStatus(404);
        }
    });
};

//return one user by specified user name
var findUserByName = function(req, res) {
	var userName = req.params.name;
    User.find({name:userName},function(err,user){
        if(!err){
            res.send(userName);
        } else{
            res.sendStatus(404);
        }
    });
};




// TESTING PURPOSES ONLY

var getIndex = function(req, res) {
    User.find(function(err, users) {
        message = users[0].name;
        if (!err) {
            res.render('index', {message});
        }
    });
};

var changeIndex = function(req, res) {
    message = req.body.message;
    console.log(req.body);
    return res.json({ status: "success", message });
};





module.exports.createUser = createUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
module.exports.findUserByName = findUserByName;
module.exports.getIndex = getIndex;
module.exports.changeIndex = changeIndex;