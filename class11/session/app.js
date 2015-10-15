var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({secret:"yuuuup. we'll use this for some signin'", saveUninitialized:false, resave:true}))
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index', {name:req.session.name});
});

app.post('/', function(req, res) {
  req.session.name = req.body.firstName
  res.redirect(303, '/success');
});

app.get('/success', function(req, res) {
  res.render('success', {name:req.session.name});
});

app.listen(3000);
