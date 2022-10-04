const {Router} = require('express');
const validatorHandler = require('../middlewares/validator.handler');
const {createProduct} = require('../schemas/product.schema');
const { getAllProducts, getProductById } = require('../controllers/products/GET/getProductsController');
const { postProducts } = require('../controllers/products/POST/postProductsController');
const { deleteProduct } = require('../controllers/products/DELETE/deleteProductsController');
const { putProduct } = require('../controllers/products/PUT/putProductsController');
const { productOrder } = require('../controllers/products/GET/orderProductByName');
const { orderProductByPrice } = require('../controllers/products/GET/orderProductsByPrice');
const router = Router();

router.get('/', getAllProducts);
router.post('/', validatorHandler(createProduct, 'body'), postProducts);
router.get('/:id', getProductById);
router.get('/orders/:nameOrder', productOrder);
router.get('/orderPrice/:orderPrice', orderProductByPrice);
router.delete('/:id', deleteProduct);
router.put('/:id', putProduct);

module.exports = router;
