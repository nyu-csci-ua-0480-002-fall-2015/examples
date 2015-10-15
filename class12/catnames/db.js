// as always, require the module
var mongoose = require('mongoose'); 

// define the data in our collection
var Cat = new mongoose.Schema({
  name: String,
  updated_at: Date
});

// "register" it so that mongoose knows about it
mongoose.model('Cat', Cat);
mongoose.connect('mongodb://localhost/catdb');
