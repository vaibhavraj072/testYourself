const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  answer: String,
  category: String,
});

module.exports = mongoose.model("Question", questionSchema);
