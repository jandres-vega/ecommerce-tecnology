const routerProduct = require('./products.router');
const routerCategorie = require('./categories.router');


function routes(app) {
    app.use('/products', routerProduct);
    app.use('/categories', routerCategorie);
}

module.exports = {routes}