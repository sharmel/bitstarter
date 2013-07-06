var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFileSync('index.html', function(err, contents) {
response.send(contents.toString);
  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
