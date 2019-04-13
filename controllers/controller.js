var users= [
	 {
		 "name":"Matthew Psy",
		 "email":"sy1@student.unimelb.edu.au",
		 "address":"CBD",
		 "phone":"0123456789",
		 "rating":"5.0",
		 "cuisine":"Phillipines"
	 },
	 {
		 "name":"Kirentheren Sanmugam",
		 "email":"ksanmugam@student.unimelb.edu.au",
		 "address":"Coburg",
		 "phone":"0454545454",
		 "rating":"4.4",
		 "cuisine":"Indian"
	 },
	 {
		 "name":"Kevin Ngoh",
		 "email":"kngoh1@student.unimelb.edu.au",
		 "address":"CBD",
		 "phone":"0456789876",
		 "rating":"3.0",
		 "cuisine":"Chinese"
	 },
	 {
		 "name":"Cameron Wilson",
		 "email":"cwilson4@student.unimelb.edu.au",
		 "address":"Suburb",
		 "phone":"0444444444",
		 "rating":"4.5",
		 "cuisine":"European"
	 },
	 ];

var createUser = function(req, res) {
    var newUser = {
        "name": req.body.name,
        "email": req.body.email,
        "address": req.body.address,
        "phone": req.body.phone,
        "rating": req.body.rating,
        "cuisine": req.body.cuisine
    };

    users.push(newUser);
    res.send(newUser);

};

var findAllUsers = function(req, res) {
    res.send(users);
};

var findOneUser = function(req, res) {
    res.send(users[req.params.id]);
};

var findUserByName = function(req, res) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == req.params.name) {
            res.send(users[i]);
            break;
        }
    }
};

module.exports.createUser = createUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
module.exports.findUserByName = findUserByName;