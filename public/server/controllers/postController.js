'use strict';

var Post = require('../models/post');

module.exports.addPost = function(req, res) {
    // console.log(req.body);
    var post = new Post(req.body);
    post.save(function(err, result) {
        // sends to client
        res.json(result);
    });
}

module.exports.displayPosts = function(req, res) {
    Post.find({}, function(err, results) {
        if(err) {
            console.log('database empty');
        } else {
            res.json(results);
        }
    });
}