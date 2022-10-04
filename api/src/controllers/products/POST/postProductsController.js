const ProductsServices = require('../../../services/products.services');

const productsAll = new ProductsServices();

const postProducts = async (req, res, next) => {
    try{
        const body = req.body;
        const newProduct = await productsAll.createProduct(body);
        res.status(200).send(newProduct)
    }catch (e) {
        next(e);
    }
}

module.exports = {postProducts}