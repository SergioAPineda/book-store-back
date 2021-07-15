const Joi = require('@hapi/joi');

const schema = Joi.object({
  title: Joi.string()
    .min(3)
    .required(),
  category: Joi.string()
    .min(4)
    .required(),
  author: Joi.string()
    .min(4)
    .required()  
  })

module.exports = schema;