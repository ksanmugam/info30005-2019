// Create database
const mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];

mongoose.connect(config.dbURI, config.options).then(
    () => {
        console.log("Connected to mongo");
    },
    err => {
        console.log("Failed to connect to mongo: ", err);
    }
);


require('./user');
require('./ingredient');
require('./distributor');