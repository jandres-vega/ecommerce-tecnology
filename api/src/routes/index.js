const routerProduct = require('./products.router');
function routes(app) {
    app.use('/products', routerProduct);
}

module.exports = {routes}