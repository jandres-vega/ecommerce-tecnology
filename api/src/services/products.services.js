const {models} = require ('../libs/conexion');

const boom = require('@hapi/boom');
const {Category} = require ('../db/models/category.model');


class ProductsServices {
    
    async findAllProducts () {
        return await models.Product.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['name_category', 'image_category']
                }
            ]
        });
    }
    
    async createProduct (body) {
        const {
            name_product,
            image
        } = body
        const products = await this.findAllProducts ();
        let productRepeat = products.find(item => item.name_product === name_product ||
        item.image === image);
        if(productRepeat){
            return "el producto ya se encuentra registrado";
        }else {
            return models.Product.create(body);
        }
    }
    
    async findProductById (id) {
        const product = await models.Product.findOne(
            {
                where: {id: id},
                include: [{
                    model: Category,
                    attributes: ['name_category', 'image_category']
                }]
            }
        );
        if (!product) throw new boom.notFound('Product not found');
        else return product;
    }
    
    async updateProduct (id, body) {
        const productId = await this.findProductById(id);
        if (!productId) throw new boom.notFound('Product not found');
        else {
            return await productId.update(body);
        }
    }
    
    async deleteProduct (id) {
        const idProdut = await this.findProductById(id);
        if (!idProdut) throw new boom.notFound("No se encontro el produto");
        else {
            return await idProdut.destroy();
        }
    }
}

module.exports = ProductsServices;