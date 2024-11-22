const express = require("express");
const connectDb = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
// db connection
connectDb();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
