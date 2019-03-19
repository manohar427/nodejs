var bodyParser = require('express');
var data = [{item:'get'},{item:'get8'},{item:'get90'}];


  // create application/json parser
//  var jsonParser = bodyParser.json()
  // create application/x-www-form-urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false })


module.exports = function(app){


  console.log('controller called.');

  app.get('/todo',function(req,res){
        //  res.send('get-/todo action received.');
          res.render('todo',{todos:data});
  });


  app.post('/todo',urlencodedParser,function(req,res){
          //res.send('/todo action received.');
          console.log('/todo action received.');
          data.push(req.body);
            res.render('todo',{todos:data});

          //res.json(data);
  });


  app.delete('/todo/:item',function(req,res){

    data  = data.filter(function(todo){
      console.log('delete request received1111...:'+JSON.stringify(todo.item));
      //console.log('delete request received...:'+todo.item.replace(/ /g, '-'));
      //console.log(console.log('delete request received...:'+todo.item.replace(/ /g, '-')));

      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
      //    res.send('/todo action received.');
  });

}
