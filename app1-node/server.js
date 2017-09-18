var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var person = require('./routes/person')

var port = 3000;

app.listen(port, function() {
	console.log('listening on port ' + port);
});

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/person', person);