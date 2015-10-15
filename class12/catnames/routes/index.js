var mongoose = require('mongoose');
var Cat = mongoose.model('Cat');

var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  Cat.find(function(err, cats, count) {
    console.log(err, cats);
    res.render( 'index', { cats: cats });
  });
});

module.exports = router;
