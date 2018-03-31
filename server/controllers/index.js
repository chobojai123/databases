var models = require('../models');


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        // var message = {};
        // var testdata = [{
        //   username: 'Joe',
        //   text: 'hi',
        //   roomname: 'lobby',
        // },
        // { username: 'Tom',
        //   text: 'test',
        //   roomname: 'lobby',
        // }]
        // message.results = testdata
        var message = {};
        message.results = [];
        data.forEach(obj => {
          message.results.push({
            'username': obj.username,
            'text': obj.message,
            'roomname': obj.roomname,
            'createdAt': obj.createdAt,
            'objectId': obj.id
          });
        });
        // var statusCode = 200;
        // var headers = {'Content-Type': 'application/json'};
        // res.writeHead(statusCode, headers);
        // res.end(JSON.stringify(message));
        res.send(message);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = req.body;
      models.messages.post(data, function(data) {
        res.send();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

