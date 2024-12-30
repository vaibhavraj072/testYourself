const express = require("express");
const router = express.Router();

// Submit answers and calculate result
router.post("/submit", (req, res) => {
  const { userAnswers } = req.body;

  let score = 0;
  const correctAnswers = [];
  const wrongAnswers = [];

  userAnswers.forEach((answer) => {
    if (answer.selectedAnswer === answer.correctAnswer) {
      score++;
      correctAnswers.push(answer.question);
    } else {
      wrongAnswers.push(answer.question);
    }
  });

  res.json({
    score,
    totalQuestions: userAnswers.length,
    correctAnswers,
    wrongAnswers,
  });
});

module.exports = router;
