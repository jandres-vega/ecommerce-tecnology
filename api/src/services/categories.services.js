const {models} = require('../libs/conexion');
const Boom = require("@hapi/boom");
const {Product} = require ('../db/models/product.model');


class CategoriesService {

    async createCategory(body) {

        const {name_category} = body;

        const getCategories = await this.findAllCategory();
        let category = getCategories.find(item => item.name_category === name_category);
        if(category){
            return "ya ahi una categoria con ese nombre";
        }else {
            return models.Category.create(body);
        }
    }

    async findAllCategory () {
        return await models.Category.findAll({
            include: [{model: Product}]
        });
    }

    async findCategoriesById (id) {

        const category = await models.Category.findByPk(id, {
            include: [{model: Product}]
        });
        if (!category){
            throw Boom.notFound('No se encuentra la categoria');
        }
        
        return category.Products;
    }

    async deleteCategoryById (id) {
        const categoryDelete = await this.findCategoriesById(id);

        if (!categoryDelete){
            throw Boom.notFound('No se encuentra la categoria');
        }
        return await categoryDelete.destroy();
    }

    async updateCategoryId (id, body) {
        const categoryId = await this.findCategoriesById(id);
        if (!categoryId){
            throw Boom.notFound('No se encuentra la categoria');
        }
        return await categoryId.update(body);
    }
}

module.exports = CategoriesService;