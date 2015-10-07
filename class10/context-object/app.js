var express = require('express');
var handlebars = require('express-handlebars').create({'defaultLayout':'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
  res.render('helpers', {
      point: {x:1, y:2},
      numbers: [10, 20, 30],
      flag: true,
      otherFlag: false
  });
});

app.listen(3000);
