//node sample clone or fork from heroku url from lecture 1



var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.writeHead(200);

fs.readFile('index.html', function(err, contents) {

  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
