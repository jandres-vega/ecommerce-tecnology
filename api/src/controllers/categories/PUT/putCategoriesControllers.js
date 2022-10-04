const CategoriesService = require('../../../services/categories.services');

const categories = new CategoriesService();

const putCategories = async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const categoryUpdate = await categories.updateCategoryId(id, body);
        res.status(200).send(categoryUpdate);
    }catch (e) {
        next(e);
    }
}

module.exports = {putCategories}