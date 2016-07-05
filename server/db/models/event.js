'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schema = new Schema({
	title: {
		type: String,
		required: true
	},
	photo: {
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