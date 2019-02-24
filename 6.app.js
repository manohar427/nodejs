var fs = require('fs');
//fs.unlink('test.txt');//delete link
//fs.mkdirSync('temp');
//fs.rmdirSync('temp');


/*fs.mkdir('temp',function(){
  console.log('temp dir created.');
});*/

fs.rmdir('temp',function(){
  console.log('temp dir rempved.');
});
