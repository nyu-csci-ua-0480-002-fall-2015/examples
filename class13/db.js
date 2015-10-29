var mongoose = require('mongoose');
// Schema represents a collection, buuuuut...
// it actually gives structure to it
// we define key (property names), and their types

// creating schema Cat... yields an actual collection
// cats (lowercase, and plural)
var Cat = mongoose.Schema({
  name: String,
  age: Number
})

mongoose.model('Cat', Cat); // register

/*
var Cat = mongoose.model('Cat') // retrieve
*/
// connect to mongod sever running on localhost, database, catdb
mongoose.connect('mongodb://localhost/catdb')
