
var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var text = fs.readFileSync("index.html", 'utf-8');


 var buffer = new Buffer()  
response.send(buffer.toString(text));

  });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
