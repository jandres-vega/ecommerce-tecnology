const ProductsServices = require('../../../services/products.services');

const productsAll = new ProductsServices();

const getAllProducts = async (req, res, next) => {
    try {
        const products = await productsAll.findAllProducts();
        res.status(200).send(products);
    }catch (e) {
        next(e);
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