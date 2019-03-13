var express = require('express');

var app = express();

app.set('view engine','ejs');

app.use('/xxx',express.static('cssfiles'));


app.get('/',function(req,res){
                  	res.send('Hi');
            });


app.get('/contact',function(req,res){
                  	res.send('Contact Us');
            });

app.get('/courses/:crs',function(req,res){
                  	res.send('Courses List requested :'+req.params.crs);
            });


app.get('/addres',function(req,res){
                              	res.sendFile(__dirname+'/address.html');
                        });
app.get('/ejs/:name',function(req,res){

var data = {
  name:'Raj',
  age:123,
  skills:['C','Java','C#','HTML']
}
  res.render('profile',{person:data});
});

app.listen(3000);
