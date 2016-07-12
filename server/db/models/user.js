'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String
	},
	first: {
		type: String
	},
	last: {
		type: String
	},
	school: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'School'
	},
	level: {
		type: String,
		enum: ['Undergrad','Master','PHD','Faculty']
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	photo: {
		type: String
	},
	salt:{
		type: String
	},
	savedEvents:{
  		type: [mongoose.Schema.Types.ObjectId],
  		ref: 'Event'
	},
	eventsToGo: {
  		type: [mongoose.Schema.Types.ObjectId],
  		ref: 'Event'
	}
})

module.exports = mongoose.model('User', schema);