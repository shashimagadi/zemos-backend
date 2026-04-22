const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  logout,refreshToken
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getMe);
router.post("/logout", logout);
router.post("/refresh", refreshToken);

module.exports = router;