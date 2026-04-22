const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./db");
const Topic = require("../models/Topic");
const Problem = require("../models/Problem");

const seedData = async () => {
  try {
    await connectDB();

    console.log("🧹 Clearing old data...");
    await Topic.deleteMany();
    await Problem.deleteMany();

    console.log("📂 Creating topics...");

    const dataStructures = await Topic.create({
      title: "Data Structures",
    });

    const algorithms = await Topic.create({
      title: "Algorithms",
    });

    const databases = await Topic.create({
      title: "Databases",
    });

    console.log("📝 Creating problems...");

    await Problem.insertMany([
      // Data Structures
      {
        topic: dataStructures._id,
        name: "Sorting Algorithms",
        leetcode: "https://leetcode.com/tag/sorting/",
        youtube: "https://www.youtube.com/watch?v=kgBjXUE_Nwc",
        article: "https://www.geeksforgeeks.org/sorting-algorithms/",
        difficulty: "easy",
      },
      {
        topic: dataStructures._id,
        name: "Binary Search",
        leetcode: "https://leetcode.com/problems/binary-search/",
        youtube: "https://www.youtube.com/watch?v=s4DPM8ct1pI",
        article: "https://www.geeksforgeeks.org/binary-search/",
        difficulty: "easy",
      },
      {
        topic: dataStructures._id,
        name: "Dynamic Programming",
        leetcode: "https://leetcode.com/tag/dynamic-programming/",
        youtube: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
        article: "https://www.geeksforgeeks.org/dynamic-programming/",
        difficulty: "medium",
      },

      // Algorithms
      {
        topic: algorithms._id,
        name: "Greedy Algorithm",
        leetcode: "https://leetcode.com/tag/greedy/",
        youtube: "https://www.youtube.com/watch?v=ARvQcqJ_-NY",
        article: "https://www.geeksforgeeks.org/greedy-algorithms/",
        difficulty: "easy",
      },
      {
        topic: algorithms._id,
        name: "Dijkstra Algorithm",
        leetcode: "https://leetcode.com/problems/network-delay-time/",
        youtube: "https://www.youtube.com/watch?v=GazC3A4OQTE",
        article: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm/",
        difficulty: "hard",
      },

      // Databases
      {
        topic: databases._id,
        name: "SQL Basics",
        leetcode: "https://leetcode.com/problemset/database/",
        youtube: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        article: "https://www.geeksforgeeks.org/sql-tutorial/",
        difficulty: "easy",
      },
      {
        topic: databases._id,
        name: "Indexing",
        leetcode: "#",
        youtube: "#",
        article: "https://www.geeksforgeeks.org/database-indexing/",
        difficulty: "medium",
      },
    ]);

    console.log(" Data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error(" Error seeding data:", err);
    process.exit(1);
  }
};

seedData();