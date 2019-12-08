// Connect through raw sql
// This script running not in docker
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

const connection = mysql.createConnection({
  host: `${process.env.SQL_HOST}`,
  user: `${process.env.SQL_USER}`,
  password: `${process.env.SQL_PASS}`,
  database: `${process.env.SQL_DB}`,
  port: `${process.env.SQL_PORT}`,
  insecureAuth: true,

});

connection.query(
  'SELECT * FROM `test_table`',
  function(err, results, fields) {
    console.log(results);
    console.log(fields);
  }
);
