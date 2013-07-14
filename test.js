var sys = require('util'),
    rest = require('restler');
var fs = require('fs');
rest.get('http://immense-inlet-2460.herokuapp.com/').on('complete', function(result) {
  if (result instanceof Error) {
    sys.puts('Error: ' + result.message);
    this.retry(5000); // try again after 5 sec
  } else {
fs.writeFile(__dirname + '/file.txt', result, function(err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
  }
});
