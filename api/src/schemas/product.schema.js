const joi = require('joi');

const limit = joi.number().integer();
const offset = joi.number().integer();
const name_product = joi.string()

const createProduct = joi.object({
    name_product: joi.string().required().min(3).max(45),
    description: joi.string().min(10),
    image: joi.string().uri().required(),
    stock: joi.number().integer(),
    price: joi.number().precision(3).required(),
    freeShopping: joi.boolean(),
    CategoryId: joi.number().required()
});

const queryProductSchema = joi.object({
    limit,
    offset,
    name_product
})

module.exports = {
    createProduct,
    queryProductSchema
}
