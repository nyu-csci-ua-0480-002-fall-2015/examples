var express = require('express');
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  console.log(req.query);
  console.log((typeof req.query.limit));
  var limit = +req.query.limit || 100;
  var myNumbers = [1, 2, 3, 4, 5, 6];
  var filteredNumbers = myNumbers.filter(function(ele) {
    return ele < limit;
  });
  res.render('get', {numbers:filteredNumbers});
});
app.listen(3000);
