var express = require('express');

var todoController = require('./controller/todoController');

var app = express();

app.set('view engine','ejs');

todoController(app);



app.use(express.static('./public'));


app.listen(1234);

console.log('App is started');
