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

router.get('/schrodingerscat', function(req, res) {
  var context = {}
  Cat.find(function(err, cats, count) {
    context.cats = cats;
  });
  console.log(context);
  res.render( 'index', context);
});


module.exports = router;
