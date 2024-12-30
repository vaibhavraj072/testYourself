const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  class: { type: String, required: true },
  subject: { type: String, required: true },
  chapter: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [String],
      answer: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Question", questionSchema);
