var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

fs.readFileSync('index.html', 'utf8', function(err, contents) {
response.send(contents);
  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
