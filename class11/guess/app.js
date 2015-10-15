var express = require('express'),
  handlebars = require('express-handlebars').create({'defaultLayout':'main'}),
  bodyParser = require('body-parser'),
  app = express(),
  guesses = [],
  secret = 5;

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
  res.render('index', {guesses:guesses});
});

app.post('/', function(req, res) {
  if(secret === +req.body.guess) {
    res.redirect('/win');
  } else {
    guesses.push(+req.body.guess); 
    res.redirect('/');
  }
});

app.get('/win', function(req, res) {
  res.render('win', {secret:secret});
});
 

app.listen(3000);
