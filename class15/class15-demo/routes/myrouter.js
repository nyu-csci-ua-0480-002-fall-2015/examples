var express = require('express');
var router = express.Router(); // this is not a constructor!
  // creates router objects

// 1. use middleware
// 2. define route handlers

router.get('/bar/baz', function(req, res) {
  res.send('qux');
}) 

/*
// /class/:number
router.get(/class\d\d/ , function(req, res) {
  console.log('params', req.params);
  res.send('ALL OF THE CLASSES');
}) 
*/

// use parens to group parts of your match
router.get(/class((\d)\d)/ , function(req, res) {
  // use req.params... at an index... to get at that match
  // 0 represents the first grouping, 1 the next etc.
  res.send(req.params);
}) 

router.get('/some/other/stuff/:var1/:var2' , function(req, res) {
  // req.params .... will contain parameters from url
  res.send(req.params.var1 + ' ,' +  req.params.var2);
}) 
// class01
// class02
// ...
// classnn


// make router object 'public'
module.exports = router
//var foo = require('myrouter') // <---- router object

