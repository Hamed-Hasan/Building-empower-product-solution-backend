const Item = require("../models/Item");

// Get all items from the database
const getAllItems = async () => {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    throw new Error('Error fetching items from the database');
  }
};

// Create a new item in the database
const createItem = async (itemData) => {
  try {
    const newItem = await Item.create(itemData);
    return newItem;
  } catch (error) {
    throw new Error('Error creating item in the database');
  }
};

// Get a specific item by ID
const getItemById = async (itemId) => {
  try {
    const item = await Item.findById(itemId);
    if (!item) {
      throw new Error('Item not found');
    }
    return item;
  } catch (error) {
    throw new Error('Error fetching item by ID');
  }
};

// Update an item by ID
const updateItem = async (itemId, itemData) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(itemId, itemData, { new: true });
    if (!updatedItem) {
      throw new Error('Item not found');
    }
    return updatedItem;
  } catch (error) {
    throw new Error('Error updating item');
  }
};

// Delete an item by ID
const deleteItem = async (itemId) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);
    if (!deletedItem) {
      throw new Error('Item not found');
    }
    return deletedItem;
  } catch (error) {
    throw new Error('Error deleting item');
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
