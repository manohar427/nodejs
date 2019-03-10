var http = require('http');
var fs = require('fs');



var http = require('http');
var server = http.createServer(function(req,res) {

console.log('Request:'+req.url);
res.writeHead(200,{'Content-Type':'application/json'});
var home = {'name':'Home'};
var contact = {'name':'Contact'};

if(req.url === '/' || req.url === '/home'){
  res.end(JSON.stringify(home));
}else if(req.url === '/contact') {
  res.end(JSON.stringify(contact));
}else{
  res.end(JSON.stringify("Not matching Found now"));
}

});

server.listen(3091);
