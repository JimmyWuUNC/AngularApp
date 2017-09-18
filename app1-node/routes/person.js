var express = require('express')
var router = express.Router()
var db = require('../db');


// Get the data for a person of given ID
router.get('/getPerson', function (req, res) {
	db.query('SELECT * FROM person WHERE id = ' + req.query.id, function(err, results, query) {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}
		res.send(results);
	});
});


// Adds a new person entry into the database
router.post('/addPerson', function (req, res) {
	console.log(req.body);
	var query = 'INSERT INTO person (id, first_name, last_name, address, company) VALUES (0, \'' + 
		req.body.firstName + '\', \'' + 
		req.body.lastName + '\', \'' + 
		req.body.address + '\', \'' + 
		req.body.company + '\')';
	console.log(query);
	db.query(query, function(err, results, query) {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		}
		res.send(results);
		
	});
});


module.exports = router;