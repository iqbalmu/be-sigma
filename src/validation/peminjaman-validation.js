const Joi = require('joi')

const bookInventoryValidation = Joi.object({
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    description: Joi.string().required(),
    userId: Joi.number().required(),    
})

module.exports = { bookInventoryValidation }