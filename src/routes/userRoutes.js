const express = require("express");

const router = express.Router();

// only admin can access this route
router.get("/admin", (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

// only manager can access this route
router.get("/manager", (req, res) => {
  res.json({ message: "Welcome to Manager Page" });
});

// All can access this route
router.get("/user", (req, res) => {
  res.json({ message: "Welcome to User Dashboard" });
});

module.exports = router;
