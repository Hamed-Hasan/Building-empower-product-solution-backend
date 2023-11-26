const { z } = require('zod');

const createItemZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Item Name is required',
    }),
  }),
});

const updateItemZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

const ItemValidation = {
  createItemZodSchema,
  updateItemZodSchema,
};

module.exports = ItemValidation;
