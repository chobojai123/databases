var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages', function (err, result, field) {
        if (err) {
          throw err;
        }
        console.log(result);
      });
    }, // a function which produces all the messages
    post: function () {
      db.query(`INSERT INTO messages (text, createdAt) VALUES (${user}, ${timeCreated})`, function (err, result, field) {
        if (err) {
          throw err;
        }
        console.log(result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

