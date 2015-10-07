var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});
var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:false}));
// GET for the initial form at / - 200
// POST for the action of the form at / - 303 ... /success
// GET for the success page at /success - 200
//
app.get('/', function(req, res) {
  res.render('form');
});

app.post('/', function(req, res) {
  console.log(req);
  res.redirect(303, '/success');
});

app.get('/success', function(req, res) {
  res.render('success');
});

app.listen(3000);
