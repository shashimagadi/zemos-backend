const express = require("express");
const router = express.Router();
const { getTopics } = require("../controllers/topicController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getTopics);

module.exports = router;