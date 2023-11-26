// Controller functions
const itemService = require("../services/itemService");

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new item
const createItem = async (req, res) => {
  try {
    const newItem = await itemService.createItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific item by ID
const getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.itemId);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an item by ID
const updateItem = async (req, res) => {
  try {
    const updatedItem = await itemService.updateItem(req.params.itemId, req.body);
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  try {
    await itemService.deleteItem(req.params.itemId);
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
