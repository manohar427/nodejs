var http = require('http');
var fs = require('fs');



var http = require('http');
var server = http.createServer(function(req,res) {

console.log('Request:'+req.url);
res.writeHead(200,{'Content-Type':'application/json'});
var json = {
  'name':'Manohar S',
  'age':30
};

res.end(JSON.stringify(json));
});

server.listen(3091);
