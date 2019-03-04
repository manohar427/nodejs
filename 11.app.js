var http = require('http');
var fs = require('fs');



var http = require('http');
var server = http.createServer(function(req,res) {

res.writeHead(200,{'Content-Type':'text/html'});
  var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
  //var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt','utf8');

  myReadStream.pipe(res);

});

server.listen(3091);
