
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    created_by: {
      type: String,
      required: true,
    },
  });
  
  const Item = mongoose.model('Item', ItemSchema);
  
  module.exports = Item;