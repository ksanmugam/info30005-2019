var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require ('http');
var fs = require ('fs');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes/routes.js');
app.use('/', routes);

var app = http.createServer(function(req,res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/homepage.html', 'utf8');
    myReadStream.pipe(res);
});

app.listen(3000, function(req, res) {
    console.log(`Express listening on port ${PORT}`);
});