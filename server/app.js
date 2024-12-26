const express = require('express');
const Question = require('./questionModel');
require('./db');

const app = express();
const PORT = 3000;

// Serve frontend files
app.use(express.static('public'));

// API to fetch 5 random questions
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
