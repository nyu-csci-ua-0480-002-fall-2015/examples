var express = require('express');
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// try http://localhost:3000/?greaterThan=4&lessThan=12
// to see the filter work
app.get('/', function(req, res) {

  // note that we're using req.query here!
  var myNumbers = [-1, 2, 4, 6, 7, 10, 14, 18],
    gt = +req.query.greaterThan,
    lt = +req.query.lessThan; 
  
  filteredNumbers = myNumbers.filter(function(ele) {
    return ele > gt && ele < lt
  })
  res.render('index', {numbers: filteredNumbers});
});

app.listen(3000);
