'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Todo Schema
 */
var TodoSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Todo name',
		trim: true
	},
	completionDate: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Todo', TodoSchema);