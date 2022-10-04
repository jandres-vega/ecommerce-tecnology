const CategoriesService = require('../../../services/categories.services');

const categories = new CategoriesService();

const deleteCategories = async (req, res, next) => {
    try {
        const {id} = req.params;
        const categoryDelete = await categories.deleteCategoryById(id);
        res.status(200).send(categoryDelete);
    }catch (e) {
        next(e);
    }
}

module.exports = {deleteCategories}