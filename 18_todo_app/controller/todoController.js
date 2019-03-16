var data = [{item:'get milk-1'},{item:'get milk-2'},{item:'get milk-3'}];


module.exports = function(app){

  console.log('controller called.');

  app.get('/todo',function(req,res){
        //  res.send('get-/todo action received.');
          res.render('todo',{todos:data});
  });


  app.post('/todo',function(req,res){
          res.send('/todo action received.');
  });


  app.delete('/todo',function(req,res){
          res.send('/todo action received.');
  });


}
