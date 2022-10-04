const {Router} = require('express');
const validatorHandlers = require('../middlewares/validator.handler');
const {categoryById, updateCategory, createCategory} = require('../schemas/category.schema');
const { getCategories, getCategoriesById } = require('../controllers/categories/GET/getCategoriesController');
const { deleteCategories } = require('../controllers/categories/DELETE/deleteCategoriesController');
const { postCategories } = require('../controllers/categories/POST/postCategoriesController');
const { putCategories } = require('../controllers/categories/PUT/putCategoriesControllers');
const router = Router();

router.post('/',validatorHandlers(createCategory, 'body'), postCategories);
router.get('/', getCategories);
router.get('/:id', getCategoriesById );
router.delete('/:id', validatorHandlers(categoryById, 'params'), deleteCategories);
router.put('/:id', validatorHandlers(updateCategory, 'body'), putCategories)

module.exports = router;