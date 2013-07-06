var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFile('index.html', function(err, contents) {
response.writeHead(200);
  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
