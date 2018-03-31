var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT message, username, roomname, createdAt, messages.id FROM messages INNER JOIN users ON messages.users_id=users.id INNER JOIN rooms ON messages.rooms_id=rooms.id', function (err, result, field) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      db.query(
        // `INSERT INTO rooms (roomname) VALUES ("${message.roomname}");
        // INSERT INTO users (username) VALUES ("${message.username}");
        `INSERT INTO messages (message, createdAt, rooms_id, users_id) VALUES ("${message.text}", '9:45AM', 2, 1);`
        , function (err, result, field) {
          if (err) {
            throw err;
          }
          callback();
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

