const mongoose = require('mongoose');
const Question = require('./questionModel');

mongoose.connect('mongodb://127.0.0.1:27017/quizDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const questions = [ /* Paste the question array from above here */ ];

async function seedDB() {
  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log('Database seeded!');
  mongoose.connection.close();
}

seedDB();

