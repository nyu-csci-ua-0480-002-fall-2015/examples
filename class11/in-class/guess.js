var express = require('express');
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});
var expressSession = require('express-session');
var app = express();
var bodyParser = require('body-parser')

var secret = 7;
// req.session.<prop-name>

// use the body-parser middleware so that we get req.body
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:'asdfasdfasdf'}));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/session', function(req, res) {
  console.log(req.session);
  res.send('yeah');
});

app.get('/', function(req, res) {
  if(!req.session.guesses) {
    req.session.guesses = []
  }
  res.render('index', {guesses:req.session.guesses});
});

app.post('/', function(req, res) {
  var guess = +req.body.guess;
  if(guess === 7) {
    res.redirect('/ftw');
  } else {
    req.session.guesses.push(guess); 
    res.redirect('/');
  }
});

app.get('/ftw', function(req, res) {
  res.render('ftw', {secret:secret});
});






app.listen(3000);
