const Question = require('./questionModel');

// Sample questions
const questions = [
  {
    chapter: 'Reproduction in Animals',
    question: 'What is reproduction?',
    options: ['Growth', 'Respiration', 'Producing offspring', 'Digestion'],
    answer: 'Producing offspring',
  },
  // Add more questions here...
];

// Insert questions into the database
async function seedQuestions() {
  try {
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log('Questions seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding questions:', error);
    process.exit(1);
  }
}

seedQuestions();
    