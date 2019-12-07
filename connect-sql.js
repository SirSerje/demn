// Connect through raw sql
// This script running not in docker
var mysql      = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootpw',
  database : 'cabin',
  port     : 3307,
  insecureAuth : true,

});

connection.query(
  'SELECT * FROM `test_table`',
  function(err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);

/*
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
*/
