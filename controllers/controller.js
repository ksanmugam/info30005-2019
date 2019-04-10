var users= [];

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