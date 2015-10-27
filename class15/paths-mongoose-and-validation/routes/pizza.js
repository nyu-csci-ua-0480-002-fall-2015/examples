var express = require('express')
var router = express.Router();
var mongoose = require('mongoose');
var Pizza = mongoose.model('Pizza');
var Topping = mongoose.model('Topping');

router.get('/', function(req, res) {
  res.send('blah');
})

router.get('/pizza', function(req, res) {
  res.send('blah');
})


router.get('/pizzas', function(req, res) {
  Pizza.find({}, function(err, pizzas, count) {
   console.log(err, pizzas);
    res.send(pizzas); 
  })
})

router.get('/pizza/create', function(req, res) {
  res.render('pizza-create');
})

router.post('/pizza/create', function(req, res) {
  var t1 = new Topping({name: req.body.topping1})
  var t2 = new Topping({name: req.body.topping2})
  var p = new Pizza({
    size: req.body.size,
    crust: req.body.crust,
    toppings: [t1, t2]
  }); 
  console.log('pizza', p, p.save);

  p.save(function(err, pizza, count){
    console.log(err, pizza);
    res.redirect(303, '/mongoose-demo/pizzas'); 
  });
  
})

module.exports = router;

