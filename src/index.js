const express = require("express");
const connectDb = require("./config/dbConnect");
const dotenv = require("dotenv").config();

// db connection
connectDb();

const app = express();

// Middleware
app.use(express.json());

// Routes

// Start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
