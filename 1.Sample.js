console.log('hi');

//setTimeout(function(){
//  console.log('2 sec got compleyed.');
//}, 2000)

var i=0;
var test = setInterval(function(){
  console.log(++i + ' sec got completed.');

  if (i==3) {
    clearInterval(test);

  }
}, 1000)

console.log('Dir name:'+__dirname);
console.log('File name:'+__filename);
