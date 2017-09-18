var express = require('express');
var app = express();
var person = require('./routes/person')

var port = 3000;

app.listen(port, function() {
	console.log('listening on port ' + port);
});

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	next(); // Not needed ???
});

app.use('/person', person);