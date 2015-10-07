var express = require('express');
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index', {
    greeting:'hello', 
    obj:{x:100, y:200}, 
    flag:false, 
    words: ['foo', 'bar', 'baz']});
});


app.listen(3000);
