const ProductsServices = require('../../../services/products.services');

const products = new ProductsServices();

const productOrder = async (req, res, next) => {
    
    let {nameOrder} = req.params;
    try {
        
        const productOrderByName = await products.orderProducts(nameOrder);
        res.status(200).send(productOrderByName)
    }catch (e) {
        next(e)
    }
}

module.exports = {productOrder}