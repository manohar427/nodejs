var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
//var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt','utf8');

//myReadStream.pipe(myWriteStream);


var http = require('http');
var server = http.createServer(function(req,res) {

  var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
  //var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt','utf8');

  myReadStream.pipe(res);

});

server.listen(3091);
