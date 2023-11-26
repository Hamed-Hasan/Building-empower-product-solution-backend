// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validateRequest = require("../middlewares/validateRequest");
const { UserValidation } = require("../validation/userValidation");

// Routes

// POST signup
router.post(
  "/signup",
  validateRequest(UserValidation.signupZodSchema),
  authController.signup
);

// POST login
router.post(
  "/login",
  validateRequest(UserValidation.loginZodSchema),
  authController.login
);

module.exports = router;
