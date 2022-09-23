const {Router} = require('express');

const CategoriesService = require('../services/categories.services');

const validatorHandlers = require('../middlewares/validator.handler');

const {categoryById, updateCategory, createCategory} = require('../schemas/category.schema');

const router = Router();

let categories = new CategoriesService();

router.post('/',
    validatorHandlers(createCategory, 'body'),
    async (req, res, next) => {
    try {
        const body = req.body;
        const newCategory = await categories.createCategory(body);
        res.status(200).send(newCategory);
    } catch (e) {
        next(e);
    }
});


router.get('/',
    async (req, res, next) => {
    try {
        const categorys = await categories.findAllCategory();
        res.status(200).send(categorys);
    } catch (e) {
        next(e)
    }
});


router.get('/:id',
    validatorHandlers(categoryById, 'params'),
    async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await categories.findCategoriesById(id);
        res.status(200).send(category);

    } catch (e) {
        next(e);
    }
});


router.delete('/:id',
    validatorHandlers(categoryById, 'params'),
    async (req, res, next) => {

    try {
        const {id} = req.params;
        const categoryDelete = await categories.deleteCategoryById(id);
        res.status(200).send(categoryDelete);
    }catch (e) {
        next(e);
    }
});


router.put('/:id',
    validatorHandlers(updateCategory, 'body'),
    async (req, res, next) => {

    try {
        const {id} = req.params;
        const body = req.body;
        const categoryUpdate = await categories.updateCategoryId(id, body);
        res.status(200).send(categoryUpdate);
    }catch (e) {
        next(e);
    }
});

module.exports = router;