const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const questionRoutes = require("./question");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/questions", questionRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
