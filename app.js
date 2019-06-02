const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var session = require("express-session");

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const PORT = process.env.PORT || 3200;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const cors = require("cors");
app.use(cors());


// Database setup
require('./models/db.js');
var mongoose = require('mongoose');
var User = mongoose.model('users');

app.use(session({
	secret: 'g',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(undefined, user._id);
    //done(undefined, {'username': user.username, 'password': user.password})
});

passport.deserializeUser((obj, done) => {
    User.findById(obj, function(err, user) {
        if (err) {
            return done(err, undefined);
        }
        done(undefined, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username or password.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect username or password.' });
        }
        return done(null, user);
      });
    }
  ));

var routes = require('./routes/routes.js');
app.use('/', routes);

app.listen(PORT, function(req, res) {
    console.log(`Express listening on port ${PORT}`);
});
