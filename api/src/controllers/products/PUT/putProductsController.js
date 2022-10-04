const ProductsServices = require('../../../services/products.services');

const productsAll = new ProductsServices();

const putProduct = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updateProduct = await productsAll.updateProduct(id, body);
        res.status(200).send(updateProduct)
    }catch (e) {
        next(e);
    }
}

module.exports = {putProduct}