const joi = require('joi');


const createProduct = joi.object({
    name_product: joi.string().required().min(3).max(45),
    description: joi.string().min(10),
    image: joi.string().uri().required(),
    stock: joi.number().integer(),
    price: joi.number().precision(3).required(),
    freeShopping: joi.boolean(),
    CategoryId: joi.number().required()
});

module.exports = {
    createProduct
}
