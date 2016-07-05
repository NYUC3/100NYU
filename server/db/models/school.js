'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schema = new Schema({
	name: String
})

module.exports = mongoose.model('School', schema);