var events = require('events');

/*var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent','HI');
*/

var util = require('util');

var Person = function(name){
  this.name = name
}
util.inherits(Person,events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');


var people = [james,mary,ryu];


people.forEach(

  function(person) {
     person.on('speak', (msg) => {

       console.log(person.name+' said:'+msg);
     });
  }
);

james.emit('speak','Hi dudes');

mary.emit('speak','Hi');

ryu.emit('speak','welcome');
