'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostsSchema = new Schema({
  title: String,
  author: String,
  text: String,
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', BlogPostsSchema);
