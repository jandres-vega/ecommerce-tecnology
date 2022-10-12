const {models} = require ('../libs/conexion');

const boom = require('@hapi/boom');
const {Category} = require ('../db/models/category.model');

class ProductsServices {
    
    async findAll() {
        return await models.Product.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['name_category', 'image_category']
                }
            ]
        });
    }

    async findAllProducts (query) {
        
        const {limit, offset} = query;
        const options = {
            include: [
                {
                    model: Category,
                    attributes: ['name_category', 'image_category']
                }
            ],
        }
        if ( limit && offset ){
            options.limit = Number(limit);
            options.offset = Number(offset);
        }
        return await models.Product.findAll(options);
    }
    
    async createProduct (body) {
        const {
            name_product,
            image,
        } = body
        const products = await this.findAll();
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
    
    async orderProducts (orderName) {
        
        const products = await this.findAll();
        switch (orderName) {
            case 'A-Z':
                
                return  products.sort((a, b) => {
                    if ( a.name_product < b.name_product ) return -1;
                    else if ( a.name_product > b.name_product ) return 1
                    return 0;
                })
            case 'Z-A':
                return  products.sort((a, b) => {
                    if(a.name_product < b.name_product) return 1;
                    else if(a.name_product > b.name_product) return -1
                    return 0;
                })
            case 'Max-Min':
                return products.sort((a, b) => {
                    if(Number(a.price) < Number(b.price)) return 1;
                    else if(Number(a.price) > Number(b.price)) return -1
                    return 0;
                })
                
            case 'Min-Max':
                return products.sort((a, b) => {
                    if(Number(a.price) < Number(b.price)) return -1;
                    else if(Number(a.price) > Number(b.price)) return 1
                    return 0;
                })
            default:
                return products;
        }
    }
}

module.exports = ProductsServices;