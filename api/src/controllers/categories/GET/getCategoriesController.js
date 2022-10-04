const CategoriesService = require('../../../services/categories.services');

const categories = new CategoriesService();

const getCategories = async  (req, res, next) => {
    try {
        const categorys = await categories.findAllCategory();
        res.status(200).send(categorys);
    } catch (e) {
        next(e)
    }
}

const getCategoriesById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const category = await categories.findCategoriesById(id);
        res.status(200).send(category);
        
    } catch (e) {
        next(e);
    }
}

module.exports = {getCategories, getCategoriesById}
