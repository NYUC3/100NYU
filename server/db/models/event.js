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
	},
	numberViewed:{
		type: Number
	},
	numberGoing: {
		type: Number
	},
	numberSaved:{
		type: Number
	},
	NYUFeature: {
		type: String
	}
})

schema.methods.findRanking = function(){

	return this.model('Event').find({upvotes: {$gt: this.upvotes}}).count().exec();
}

module.exports = mongoose.model('Event', schema);