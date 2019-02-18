function sayHi(){
  console.log('hi');
}

sayHi();

var hello = function(temp){
  console.log('hello:'+temp);
}
hello('Test1');

function finalf(myFunc){
  myFunc;
}

finalf(hello('Test2'));
