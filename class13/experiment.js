var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yeah');
console.log('connected');
mongoose.disconnect();
console.log('disconnected');
