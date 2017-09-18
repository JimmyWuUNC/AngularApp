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


// Add a new person entry into the database
router.post('/addPerson', function (req, res) {
	console.log(req.body);
	
	// company can be blank, first name, last name, and address cannot
	if (!req.body.firstName || typeof req.body.firstName !== 'string') {
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send('Invalid or missing First Name');
		return;
	}
	
	if (!req.body.lastName || typeof req.body.lastName !== 'string') {
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send('Invalid or missing First Name');
		return;
	}
	
	if (!req.body.address || typeof req.body.address !== 'string') {
		res.setHeader('Content-Type', 'application/json');
		res.status(400).send('Invalid or missing First Name');
		return;
	}
	
	// Building and executing the query
	var query = '';
		
	if (req.body.company) {
		query = 'INSERT INTO person (id, first_name, last_name, address, company) VALUES (0, \'' + 
		req.body.firstName + '\', \'' + 
		req.body.lastName + '\', \'' + 
		req.body.address + '\', \'' + 
		req.body.company + '\')';
	} else {
		query = 'INSERT INTO person (id, first_name, last_name, address) VALUES (0, \'' + 
		req.body.firstName + '\', \'' + 
		req.body.lastName + '\', \'' + 
		req.body.address + '\')';
	}
	
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