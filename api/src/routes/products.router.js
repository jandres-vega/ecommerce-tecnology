const {Router} = require('express');

const ProductsService = require('../services/products.services');

const validatorHandler = require('../middlewares/validator.handler');

const {createProduct} = require('../schemas/product.schema');

const router = Router();

const product = new ProductsService();

router.get('/', async (req, res,next) => {
    try {
        const products = await product.findAllProducts();
        res.status(200).send(products);
    }catch (e) {
        next(e);
    }
})

router.post('/',
            validatorHandler(createProduct, 'body'),
            async (req, res, next) => {
    try{
        const body = req.body;
        const newProduct = await product.createProduct(body);
        res.status(200).send(newProduct)
    }catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const productId = await product.findProductById(id);
        res.status(200).send(productId);
    }catch (e) {
        next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const productDelete = await product.deleteProduct(id);
        res.status(200).send(productDelete);
    }catch (e) {
        next(e);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const {body} = req;
        const updateProduct = await product.updateProduct(id, body);
        res.status(200).send(updateProduct)
    }catch (e) {
        next(e);
    }
});

module.exports = router;