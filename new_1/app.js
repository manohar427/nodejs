function hi(){
  console.log("Hi");
}

//hi();

//console.log(window);
//console.log(document);
//Window and document objects are not present in Node js

//Global objects
//console.log('OK');

/*setInterval(function(){

  console.log(new Date());

 }, 3000);
*/

global.setInterval(function(){

  console.log(new Date());

 }, 3000)
//window.console.log('window');
global.console.log('global');


const v8 = require('v8');
console.log(v8.getHeapStatistics());  
