var express = require('express');
var app = express();
require('./db');
var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');


app.get('/', function(req, res) {
  // find ... 1st arg: criteria for query
  // 2nd arg is callback for when you find stuff
  Cat.find({name: 'paw newman'}, function(err, cats, count){
    res.send(cats);
  }); 

})



app.listen(3000);
