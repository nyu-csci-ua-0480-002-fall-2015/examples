var mongoose = require('mongoose'),
    URLSlugs = require('mongoose-url-slugs');

var Topping = new mongoose.Schema({
  name: String,
  extra: {type:Boolean, default:false}

});

var Pizza = new mongoose.Schema({
  crust: String,
  size: {type: String, enum:['small', 'medium', 'large']},
  toppings: [Topping] // this is an Array of toppings
});
/*
 *
{
  crust: 'thin',
  size: 'medium',
  slug: 'medium-thin-2'// taken care of by plugin
  toppings: [{name:'mushroom', extra:true}, {name:'peppers'}]
}
 */
// schema goes here

// configure url slugs plugin
mongoose.model('Pizza', Pizza);
mongoose.model('Topping', Topping);
mongoose.connect('mongodb://localhost/pizzadb');











