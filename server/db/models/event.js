'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	title: {
		type: String,
		required: true
	},
	photo: {
		type: String
	},
	category:{
		type: String
	},
	upvotes: {
		type: Number
	},
	downvotes: {
		type: Number
	},
	description: {
		type: String
	},
	tips: {
		type: String
	},
	time: {
		type: Date
	},
	location: {
		type: String
	}
})

module.exports = mongoose.model('Event', schema);