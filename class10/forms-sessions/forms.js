var express = require('express');
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});
var bodyParser = require('body-parser');
var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:false}));

app.post('/', function(req, res) {
  console.log(req.body);
  res.redirect(303, '/success')
});

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/success', function(req, res) {
  res.render('success');
});

app.listen(3000);
