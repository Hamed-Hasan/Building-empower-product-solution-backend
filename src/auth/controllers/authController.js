// controllers/authController.js
const userService = require("../services/userService");
const bcrypt = require("bcrypt");

/**
 * Handles user signup.
 * @route POST /signup
 * @param {Object} req.body - User details {name: string, email: string, password: string}.
 * @returns {Object} - Object with status, data (created user), and message.
 */
const signup = async (req, res) => {
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await userService.createUser({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    res.status(201).json({
      status: "success",
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
};

/**
 * Handles user login.
 * @route POST /login
 * @param {Object} req.body - User credentials {email: string, password: string}.
 * @returns {Object} - Object with status, data (user details), and message.
 */
const login = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);

    // Check if the user exists and compare the password
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      res.status(200).json({
        status: "success",
        data: { user: { name: user.name, email: user.email } },
        message: "Login successful",
      });
    } else {
      res.status(401).json({ status: "error", error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
};
