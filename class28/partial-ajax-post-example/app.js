var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'})
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
require('./db');

var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/movies', function(req, res) {
  Movie.find({}, function(err, movies, count) {
    res.render('movies', {movies: movies});
  });
});

app.post('/api/movie', function(req, res) {
  (new Movie({title: req.body.title})).save(function(err, movie, count) {
    res.send({'movie':movie});
  });
});

app.get('/create/movie', function(req, res) {
  res.render('create-movie', {}); 
});

app.get('/api/movies', function(req, res) {
  var movieFilter = {};
  var searchExists = false;
  if(req.query.director) {
    movieFilter.director = req.query.director; 
    searchExists = true;
  }
 
  Movie.find(movieFilter, function(err, movies, count) {
    //res.render('movies', {'movies': movies, searchExists: searchExists, director: req.query.director });
    res.send(movies);
  });
});

app.listen(3000);
