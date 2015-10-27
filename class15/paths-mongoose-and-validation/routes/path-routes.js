var express = require('express');
var router = express.Router();

/** 
 * /class01
 * /class02
 * ...
 * etc.
 */
router.get(/class\d\d/, function(req, res) {
  res.send('All the classes!');
});

/*
// capture the digits only
router.get(/class(\d\d)/, function(req, res) {
  res.send(req.params[0]);
});
 */

router.get('/class/:classnum', function(req, res) {
  res.send('Class number ' + req.params.classnum +'!');
});

router.get('/some/other/parts/:var1/:var2', function(req, res) {
    res.send(req.params.var1 + ', ' + req.params.var2);
});

module.exports = router;
