var mongoose = require('mongoose'),
    URLSlugs = require('mongoose-url-slugs');

var Topping = new mongoose.Schema({
  name: String,
  extra: {type: Boolean, default: false}
})

var Pizza = new mongoose.Schema({
  size: {type:String, enum: ['small', 'medium', 'large']},
  crust: String,
  toppings: [Topping]
}); 

Pizza.plugin(URLSlugs('size crust'));
mongoose.model('Pizza', Pizza);
mongoose.model('Topping', Topping);
mongoose.connect('mongodb://localhost/pizzadb');
