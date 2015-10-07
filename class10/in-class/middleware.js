var express = require('express');
var app = express();


function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

app.get('/foo', function(req, res) {
  console.log('foo');
  res.send('foo');
});

app.get('/bar', function(req, res) {
  console.log('bar');
  res.send('bar');
});

app.use(function(req, res, next) {
  console.log(3);
  next();
})
app.listen(3000);


