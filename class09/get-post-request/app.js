var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars')
	.create({defaultLayout:'main'});
var path = require("path");

// create a cross-platform compatible path name (don't just use public)
var publicPath = path.resolve(__dirname, "public");

var port = 3000;
var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// MIDDLEWARE

// static content
app.use(express.static(publicPath));

// to display request body...
app.use(bodyParser.urlencoded({ extended: false }));

// for logging request information
app.use(function(req, res, next) {
	console.log('params for ', req.method, req.url);
	console.log('======');
	console.log('req.url:', req.url);
	console.log('req.method:', req.method);
	console.log('req.path:', req.path);
	console.log('req.query:', req.query);
	// console.log('req.route:', req.route);
	// console.log('req.params:', req.params);
	console.log('req.headers:', req.headers);
	console.log('req.body:', req.body);
	console.log('\n\n\n');
	next();
});
// ROUTES
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/post-demo', function(req, res) {
	res.render('post-demo');
});

app.post('/post-demo', function(req, res) {
	res.redirect(303, '/success');
});

app.get('/home', function(req, res) {
	res.redirect(302, '/');
});

app.get('/success', function(req, res) {
	res.render('success');
});

app.get('/array', function(req, res) {
  res.render('array', {numbers:[1, 2, 3, 4]})
})

app.get('/templating-arrays', function(req, res) {
	res.render('templating-arrays', {'luckyNumbers':[42, 7, 78, 3, 5]});
});

app.get('/templating-objects', function(req, res) {
	res.render('templating-objects', {'obj':{'topping':'mushroom', 'size':'medium'}});
});

app.get('/bad-form', function(req, res) {
	res.render('bad-form');
});

app.post('/bad-form', function(req, res) {
	res.set('X-XSS-Protection', 0);
	res.render('js-injection', req.body);
});

// added during class
// ?stuff=....
app.get('/demo', function(req, res) {
  res.render('demo', {'input':req.query.stuff});
});

app.listen(port);
console.log('started server on port', port);
