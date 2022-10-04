const CategoriesService = require('../../../services/categories.services');

const categories = new CategoriesService();

const postCategories = async (req, res, next) => {
    try {
        const body = req.body;
        const newCategory = await categories.createCategory(body);
        res.status(200).send(newCategory);
    } catch (e) {
        next(e);
    }
}

module.exports = {postCategories}