var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'})
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
require('./db');
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');

app.get('/movies', function(req, res) {
  Movie.find({}, function(err, movies, count) {
    res.render('movies', {movies: movies});
  });
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
