const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Question = require("./questionModel");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/submit", async (req, res) => {
  try {
    const { answers } = req.body;
    let score = 0;

    for (const [questionId, userAnswer] of Object.entries(answers)) {
      const question = await Question.findById(questionId);
      if (question && question.answer === userAnswer) {
        score++;
      }
    }

    res.json({ score, total: Object.keys(answers).length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
