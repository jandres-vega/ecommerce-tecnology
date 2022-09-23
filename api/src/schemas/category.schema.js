const joi = require('joi');

const name_category = joi.string().required();
const image_category = joi.string().uri();
const id = joi.number().integer();

const createCategory = joi.object({
    name_category: name_category,
    image_category: image_category
});

const updateCategory = joi.object({
    name_category: name_category,
    image_category: image_category
});

const categoryById = joi.object({
    id: id.required()
});

module.exports = {
    createCategory,
    updateCategory,
    categoryById
}