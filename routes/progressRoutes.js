const express = require("express");
const router = express.Router();
const { updateProgress } = require("../controllers/progressController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, updateProgress);

module.exports = router;