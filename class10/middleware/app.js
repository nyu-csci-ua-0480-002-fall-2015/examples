var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log('first middleware!');
  next();
});

app.use(function(req, res, next) {
  console.log('second middleware!');
  next();
});

app.use(myLogger);

function myLogger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.get('/foo', function(req, res) {
  res.send('foo');
  console.log('foo');
});

app.get('/bar', function(req, res) {
  res.send('bar');
  console.log('bar');
});

app.get('/baz', function(req, res) {
  res.send('baz');
  console.log('baz');
});

app.listen(3000);
