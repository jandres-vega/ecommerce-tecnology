const ProductsServices = require('../../../services/products.services');

const productsAll = new ProductsServices();

const deleteProduct = async (req, res, next)=> {
    try {
        const {id} = req.params;
        const productDelete = await productsAll.deleteProduct(id);
        res.status(200).send(productDelete);
    }catch (e) {
        next(e);
    }
}

module.exports = {deleteProduct}