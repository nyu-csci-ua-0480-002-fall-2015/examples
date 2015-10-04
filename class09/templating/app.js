var express = require('express');

// bring in express-handlebars 
// ... and specify that views/layouts/main.handlebars is the default layout 
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

// some configs 4 u
var port = 3000; // port to serve on

// set up express app
var app = express();

// register express.engine as a function...
app.engine('handlebars', handlebars.engine);

// set handlebars as default view engine
app.set('view engine', 'handlebars');

// simply render views/basic.handlebars
app.get('/', function(req, res) {
  res.render('index');
});

// simply render views/basic.handlebars
app.get('/basic', function(req, res) {
  res.render('basic');
});

// render views/variables.handlebars with two variables
app.get('/variables', function(req, res) {
  res.render('variables', {var1: 'hello', var2: 'world'});
});

// render views/arrays.handlebars with a variable that's an array
app.get('/arrays', function(req, res) {
  res.render('arrays', {numbers: [1, 2, 3], words: ['foo', 'bar', 'baz']});
});

// render views/arrays.handlebars with a variable that's an object
app.get('/objects', function(req, res) {
  res.render('objects', {obj: {x:100, y:200}});
});

app.listen(port);
console.log('Started server on port ' + port + ', CTRL + C to exit');
