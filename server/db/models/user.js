'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Event = mongoose.model('Event');
const crypto = require('crypto');
const _ = require('lodash');

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

schema.methods.sanitize = function() {
    return _.omit(this.toJSON(), ['password', 'salt','email']);
};

var generateSalt = function() {
    return crypto.randomBytes(16).toString('base64');
};

var encryptPassword = function(plainText, salt) {
    var hash = crypto.createHash('sha1');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

schema.pre('save', function (next) {
	if (this.isModified('password')) {
		this.salt = this.constructor.generateSalt();
		this.password = this.constructor.encryptPassword(this.password, this.salt);
	}
  	next();
});

schema.statics.generateSalt = generateSalt;
schema.statics.encryptPassword = encryptPassword;

schema.method('correctPassword', function(candidatePassword) {
    return encryptPassword(candidatePassword, this.salt) === this.password;
});

function IsInArray(array, element){
	if(array.indexOf(element) > -1) return true;
	return false;
}

schema.methods.saveEvent = function(eventInfo){
	var eventId = eventInfo._id;
	var self = this;
	// check if the event has been saved before or not
	if(IsInArray(this.savedEvents, eventId)) return self.save();
	else 
	return Event.findById(eventId)
		.then(event => {
			event.numberGoing++;
			return event.save();
		})
		.then(() => {
			self.savedEvents.push(eventId);
			return self.save();
		})
}

schema.methods.goToEvent = function(eventInfo){
	var eventId = eventInfo._id;
	var self = this;
    // check if the event has been saved before or not
	if(IsInArray(this.eventsToGo, eventId)) return self.save();
	else return Event.findById(eventId)
	.then(event => {
		event.numberGoing++;
		return event.save();
	})
	.then(() => {
		self.eventsToGo.push(eventId);
		return self.save();
	})
}


module.exports = mongoose.model('User', schema);