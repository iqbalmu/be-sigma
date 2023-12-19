const Joi = require("joi");

const createInventoryValidation = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(3).required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    images: Joi.object().required(),
    stock: Joi.string().required()
})

const updateInventoryValidation = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(3).optional(),
    description: Joi.string().optional(),
    category: Joi.string().optional(),
    images: Joi.object().optional(),
    stock: Joi.string().optional()
})

const getInventoryValidation = Joi.number().required()

module.exports = { createInventoryValidation, updateInventoryValidation, getInventoryValidation }