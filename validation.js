// Validation
const Joi = require('@hapi/joi');


// Balance Validation
const balanceValidationNonPremium = data => {
    const schema = {
        amount: Joi.number().min(0).max(50000).required(),
        description: Joi.string().min(1).required(),
        isExpense: Joi.boolean().required()
    };
    return Joi.validate(data, schema);
}

module.exports = {
    balanceValidation: balanceValidationNonPremium
}