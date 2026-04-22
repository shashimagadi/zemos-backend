const Topic = require("../models/Topic");
const Problem = require("../models/Problem");
const Progress = require("../models/Progress");

// exports.getTopics = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const topics = await Topic.find();

//     const result = [];

//     for (let topic of topics) {
//       const problems = await Problem.find({ topic: topic._id });

//       const formattedProblems = [];

//       for (let p of problems) {
//         const progress = await Progress.findOne({
//           user: userId,
//           problem: p._id,
//         });

//         formattedProblems.push({
//           _id: p._id,
//           name: p.name,
//           leetcode: p.leetcode,
//           youtube: p.youtube,
//           article: p.article,
//           difficulty: p.difficulty,
//           completed: progress?.completed || false,
//         });
//       }

//       result.push({
//         _id: topic._id,
//         title: topic.title,
//         problems: formattedProblems,
//       });
//     }

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching topics" });
//   }
// };



exports.getTopics = async (req, res) => {
  try {
    const userId = req.user.id;

    const topics = await Topic.find();
    const problems = await Problem.find();

    const progressList = await Progress.find({ user: userId });

    // Create lookup map
    const progressMap = {};
    progressList.forEach((p) => {
      progressMap[p.problem.toString()] = p.completed;
    });

    const result = topics.map((topic) => {
      const topicProblems = problems
        .filter((p) => p.topic.toString() === topic._id.toString())
        .map((p) => ({
          _id: p._id,
          name: p.name,
          leetcode: p.leetcode,
          youtube: p.youtube,
          article: p.article,
          difficulty: p.difficulty,
          completed: progressMap[p._id.toString()] || false,
        }));
console.log("Topic:", topic.title, "Problems:", topicProblems.length);      
      return {
        _id: topic._id,
        title: topic.title,
        problems: topicProblems,
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Error fetching topics" });
  }
};