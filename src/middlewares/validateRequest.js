const { z } = require('zod');
const { NextFunction, Request, Response } = require('express');

const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
      cookies: req.cookies,
    });
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateRequest;
