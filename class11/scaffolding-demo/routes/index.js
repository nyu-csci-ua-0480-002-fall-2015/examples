var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  throw new Error('Made an error!');
  res.render('index', { title: 'Express' });
});

module.exports = router;
