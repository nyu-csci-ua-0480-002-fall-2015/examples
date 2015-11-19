var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Message = mongoose.model('Message');


router.post('/messages', function(req, res) {
  var text = req.body.messageText;
  var m = new Message({
    text: text,
    sentDate: Date.now()
  });
  console.log(m);
  m.save(function(err, message, count){
    console.log('sending stuff');
    res.send(message);
  })
})

module.exports = router;
