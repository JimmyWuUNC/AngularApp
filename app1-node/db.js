var mysql = require('mysql');
var config = require('./config');

var connection = mysql.createConnection({
	host: config.database.host,
	port: config.database.port,
	database: config.database.databaseName,
	user: config.database.user,
	password: config.database.password
});


connection.connect(function(err){
	if(!err) {
		console.log('Database is connected!');
	} else {
		console.log('Error connecting database!');
	}
});

module.exports = connection;