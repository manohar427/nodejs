var express = require('express');

var app = express();


app.get('/',function(req,res){
                  	res.send('Hi');
            });


app.get('/contact',function(req,res){
                  	res.send('Contact Us');
            });

app.get('/courses',function(req,res){
                  	res.send('Courses List');
            });



app.listen(3000);
