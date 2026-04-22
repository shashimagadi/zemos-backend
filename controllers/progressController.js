const Progress = require("../models/Progress");

exports.updateProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const { problemId, completed } = req.body;

    // check if already exists
    let progress = await Progress.findOne({
      user: userId,
      problem: problemId,
    });

    if (progress) {
      // update
      progress.completed = completed;
      await progress.save();
    } else {
      // create new
      progress = await Progress.create({
        user: userId,
        problem: problemId,
        completed,
      });
    }

    res.json({ message: "Progress updated" });
  } catch (err) {
    res.status(500).json({ message: "Error updating progress" });
  }
};