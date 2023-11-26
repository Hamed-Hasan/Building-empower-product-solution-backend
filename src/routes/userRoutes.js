const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateRequest = require('../middlewares/validateRequest');
const UserValidation = require('../Validation/userValidation');


// Routes

// GET all users
router.get('/', userController.getAllUsers);

// GET a specific user by ID
router.get('/:userId', userController.getUserById);

// POST a new user
router.post('/create-user', validateRequest(UserValidation.createUserZodSchema), userController.createUser);

// PUT update a user by ID
router.put('/:userId', validateRequest(UserValidation.updateUserZodSchema), userController.updateUser);

// DELETE a user by ID
router.delete('/:userId', userController.deleteUser);

module.exports = router;
