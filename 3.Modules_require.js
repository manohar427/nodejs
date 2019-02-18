var x = function(arr){
  return "Length is:"+arr.length;
}

var add = function(x,y){
  var sum = x+y;
  return "sum is :"+sum;
}
//module.exports.x = x;
//module.exports.add = add;

module.exports = {
  x:x,
  add:add
};
