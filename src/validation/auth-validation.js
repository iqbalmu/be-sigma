const Joi = require('joi')

const authValidation = Joi.object({
    id: Joi.number().required(),
    password: Joi.string().required()
})

module.exports = { authValidation }