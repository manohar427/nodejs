var express = require('express');

var app = express();

var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.set('view engine','ejs');


//POST Request Example :

app.post('/test', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.render('success',  {data:JSON.stringify(req.body)});
})


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

app.get('/query',function(req,res){
                                console.log('Query params received:'+JSON.stringify(req.query));
                              	res.send('Query params received:'+JSON.stringify(req.query));
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
