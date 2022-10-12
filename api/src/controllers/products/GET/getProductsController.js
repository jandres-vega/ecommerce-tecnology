const ProductsServices = require('../../../services/products.services');

const productsAll = new ProductsServices();

const getAllProducts = async (req, res, next) => {
    
    const {name_product} = req.query
    try {
        const products = await productsAll.findAllProducts(req.query);
        if ( name_product ) {
            const getProductByName = products.filter(item => {
                return item.name_product.toLowerCase().includes(name_product.toLowerCase());
            })
            if ( getProductByName.length === 0 ) {
                res.status(404).send('No se encontro ningun producto')
            }else {
                res.status(200).send(getProductByName)
            }
        }else {
            res.status(200).send(products);
        }
    }catch (e) {
        next(e)
    }
}

const getProductById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const productId = await productsAll.findProductById(id);
        res.status(200).send(productId);
    }catch (e) {
        next(e);
    }
}


module.exports = {getAllProducts, getProductById}