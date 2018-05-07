//Mongo DB database connecttion
var mongoose = require('mongoose');
frontierdb = mongoose.connect('mongodb://frontierdb:frontier@ds163119.mlab.com:63119/frontierdb');

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    // we have connected successfully
});
