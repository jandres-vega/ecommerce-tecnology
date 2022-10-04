const ProductsServices = require('../../../services/products.services');

const products = new ProductsServices();

const orderProductByPrice = async (req, res, next) => {
    let {orderPrice} = req.params;
    console.log (orderPrice)
    try {
        const productsOrderPrice = await products.orderProductsPrice(orderPrice);
        res.status(200).send(productsOrderPrice);
    }catch (e) {
        next(e);
    }
}

module.exports = {orderProductByPrice}