var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/100NYU');

require('./models');

var startDbPromise = new Promise(function(resolve, reject) {
	db.on('open', resolve);
	db.on('error', reject);
})

startDbPromise.then(function(){
	console.log('MongoDB connection opened!');
})

module.exports = startDbPromise;