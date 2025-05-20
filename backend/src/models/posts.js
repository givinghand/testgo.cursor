const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  slug:      { type: String, required: true, unique: true }, // url-friendly
  content:   { type: String, required: true },
  author:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags:      { type: [String], default: [] },
  published: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('posts', postSchema);
