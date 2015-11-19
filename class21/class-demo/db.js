var mongoose = require('mongoose');


var Message = new mongoose.Schema({
   text: {type: String},
   dateSent: {type: Date}
});

mongoose.model('Message', Message);
mongoose.connect('mongodb://localhost/chatty');
