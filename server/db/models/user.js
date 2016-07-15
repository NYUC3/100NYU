'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = mongoose.Schema('Event')

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

schema.methods.saveEvent = function(eventInfo){
	this.savedEvents.push(eventInfo._id);
	return Event.findById(eventtInfo._id)
	.then(event => {
		event.numberSaved++;
	})
	.then(() => {
		return this.save();
	})
	
}

schema.methods.goToEvent = function(eventInfo){
	this.eventsToGo.push(eventInfo._id);
	return Event.findById(eventInfo._id)
	.then(event => {
		event.numberGoing++;
	})
	.then(() => {
		return this.save();
	})
}

module.exports = mongoose.model('User', schema);