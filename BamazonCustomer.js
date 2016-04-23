var mysql = require('mysql');
// creates the connection that will connect this file to the mysql database
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'Bamazon'
});

// initiates the connection that we created earlier
connection.connect(function(err){
	// if there is an error log it
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	// if not error console.log connected
	console.log('connected as id: ' + connection.threadID);

});

connection.query('Select * from Products',function(err,res) {
	if (err) {
		console.log(err);
	}

	console.log(res);
});

prompt.start();

prompt.get(["What is the Product ID","How many units of this order do you want?"], function (err, result){


});