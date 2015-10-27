var express = require('express');
router = express.Router();
var mongoose = require('mongoose');
var Pizza = mongoose.model('Pizza');

// all the pizzas
router.get('/pizzas', function(req, res) {
  Pizza.find({}, function(err, pizzas, count) {
    res.send(pizzas);
  })
});

router.get('/pizza/create', function(req, res) {
  res.render('pizza-create');
});

router.post('/pizza/create', function(req, res) {
  // create a new pizza object
  console.log('within post');
  var p = new Pizza({
    crust: req.body.crust,
    size: req.body.size
  })

  console.log('before save');
  // call save to actually store in database
  //
  p.save(function(err, pizza, count){
    console.log('within save');
    // do stuff when the save is done
    console.log('error', err);
    res.redirect(303, '/pizzas');
  });
});

module.exports = router;









