const mongoose = require('./db');

// Define schema for questions
const questionSchema = new mongoose.Schema({
  chapter: String,
  question: String,
  options: [String],
  answer: String,
});

// Create and export the model
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
