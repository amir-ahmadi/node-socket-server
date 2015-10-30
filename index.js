var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
});

io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('disconnect', function() {
      console.log('user disconnected');
   });
});

io.on('connection', function(socket) {
   socket.on('chat message', function(msg) {
      console.log('message: ' + msg);
   });
});

io.on('connection', function(socket) {
   socket.on('chat message', function(msg) {
      io.emit('chat message', msg);
   });
});

http.listen(3000, function() {
   console.log('Listening on port 3000..');
});