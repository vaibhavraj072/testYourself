const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/quizApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
