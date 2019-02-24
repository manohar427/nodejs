var fs = require('fs');

/*var data = fs.readFileSync('sample5.txt','utf8');

console.log('File Data:'+data);

fs.writeFileSync('write5.txt',data);
*/
var data1 = fs.readFile('sample5.txt','utf8',function(err,data){
    console.log('DATA:'+data);
    fs.writeFile('write5.txt',data);
});
