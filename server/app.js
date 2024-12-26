const express = require("express");
const mongoose = require("mongoose");
const Question = require('./models/Question');
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// API to Add Questions
app.post("/api/questions", async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ message: "Question added" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// API to Get Questions
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API to Evaluate Answers
app.post("/api/evaluate", async (req, res) => {
  try {
    const { responses } = req.body;
    let score = 0;

    for (const response of responses) {
      const question = await Question.findById(response.id);
      if (question && question.answer === response.answer) {
        score++;
      }
    }

    res.json({ score });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
