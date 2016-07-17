'use strict';
var path = require('path');
var DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;


var mongoose = require('mongoose');
var db = mongoose.connect(DATABASE_URI).connection;

require('./models');

var startDbPromise = new Promise(function(resolve, reject) {
	db.on('open', resolve);
	db.on('error', reject);
})

startDbPromise.then(function(){
	console.log('MongoDB connection opened!');
})

module.exports = startDbPromise;