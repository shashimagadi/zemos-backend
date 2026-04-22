const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
  },
  name: String,
  leetcode: String,
  youtube: String,
  article: String,
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
  },
});

module.exports = mongoose.model("Problem", problemSchema);