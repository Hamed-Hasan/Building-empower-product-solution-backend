const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const validateRequest = require('../middlewares/validateRequest');
const ItemValidation = require('../Validation/itemValidation');

// Routes

// GET all items
router.get('/',  itemController.getAllItems);

// GET a specific item by ID
router.get('/:itemId', itemController.getItemById);

// POST a new item
router.post('/create-item', validateRequest(ItemValidation.createItemZodSchema), itemController.createItem);

// PUT update an item by ID
router.put('/:itemId',validateRequest(ItemValidation.updateItemZodSchema), itemController.updateItem);

// DELETE an item by ID
router.delete('/:itemId', itemController.deleteItem);

module.exports = router;
