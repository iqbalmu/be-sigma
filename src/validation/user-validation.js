const Joi = require("joi");

const createUserValidation = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(3).required(),
    email: Joi.string().required(),
    roleId: Joi.number().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
    images: Joi.object().required()
})

const updateUserValidation = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(3).optional(),
    email: Joi.string().optional(),
    roleId: Joi.number().optional(),
    phone: Joi.string().optional(),
    password: Joi.optional(),
    images: Joi.object().optional()
})

const getUserValidation = Joi.number().required()

module.exports = { createUserValidation, updateUserValidation, getUserValidation }