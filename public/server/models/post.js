'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')

var PostSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});


module.exports = mongoose.model('Post', PostSchema);