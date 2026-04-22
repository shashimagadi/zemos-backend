const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Progress", progressSchema);