var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
  
});

dbConnection.connect(function(err) {
  if (err) {
    throw err;
  } 
  console.log('Connected!');
});

exports.dbQuery = function() {
  dbConnection.query('SELECT * FROM messages', function (err, result, field) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
};

exports.dbPost = function(user, timeCreated) {
  dbConnection.query(`INSERT INTO messages (text, createdAt) VALUES (${user}, ${timeCreated})`, function (err, result, field) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
};