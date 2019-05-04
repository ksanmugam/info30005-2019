const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3400;
 
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const cors = require("cors");
app.use(cors());

// Database setup
require('./models/db.js');

var message = "Hello";

app.post('/test', (req, res) => {
    message = req.body.message;
    console.log(req.body);
    return res.json({ status: "success", message });
});

app.get('/test', function(req, res) {
    res.render("index", {message});
})



//var routes = require('./routes/routes.js');
//app.use('/', routes);



app.listen(PORT, function(req, res) {
    console.log(`Express listening on port ${PORT}`);
});