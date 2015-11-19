var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = mongoose.model('Message');

/* GET home page. */
router.get('/api/messages', function(req, res, next) {
  Message.find({}, function(err, messages, count) {
    res.json(messages.map(function(msg) {
      return {'text':msg.text, 'date':msg.dateSent}; 
    })); 
  });
});

router.post('/api/message', function(req, res, next) {
  console.log(req.body);
  var m = new Message({
    text: req.body.message,
    dateSent: Date.now()
  });
  m.save(function(err, message, count){
    if(err) {
      console.log(err);
      return res.send(500, 'Oops - 500 error!')
    } else {
      res.json({id: message._id});
    }
  })
});

module.exports = router;
