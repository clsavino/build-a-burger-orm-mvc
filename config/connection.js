/*
Make the connection to the database and export to be used by the O.R.M.
*/
var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'christi',
  database: 'burgers_db'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
