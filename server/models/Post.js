const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
 