var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: 'guitar1999',
  database: 'userdata'
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS checkout', (err, result, fields) => {
  if (err) {
    console.log('ERROR', err);
  }
})

connection.query('USE checkout', (err, result, fields) => {
  if (err) {
    console.log('ERROR', err);
  }
})

connection.query('CREATE TABLE IF NOT EXISTS userdata(name VARCHAR(30), email VARCHAR(50), password VARCHAR(20), line1 VARCHAR(50), line2 VARCHAR(50), city VARCHAR(20), state VARCHAR(20), zip INT, cardnum VARCHAR(20), expire DATE, CVV int, bzip INT)', function (error, results, fields) {
  if (error) throw error;
})


module.exports = connection;