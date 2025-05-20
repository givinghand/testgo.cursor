const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

const questionSchema = new mongoose.Schema({
  topic:        { type: String, required: true },
  difficulty:   { type: String, enum: ['easy','medium','hard'], default: 'medium' },
  text:         { type: String, required: true },
  choices:      { type: [choiceSchema], required: true },
  correctIndex: { type: Number, required: true },
  tags:         { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('questions', questionSchema);
