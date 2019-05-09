const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3400;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
require('./models/db.js');

var routes = require('./routes/routes.js');
app.use('/', routes);

app.listen(PORT, function(req, res) {
    console.log(`Express listening on port ${PORT}`);
});
