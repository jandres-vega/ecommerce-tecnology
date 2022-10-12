const {User, userSchema} = require('./models/user.model');
const {Address, addressSchema} = require('./models/address.model');
const {Category, categorySchema} = require('./models/category.model');
const {Product, productSchema} = require('./models/product.model');
const {Order, orderSchema} = require('./models/order.model');
const {Review, reviewSchema} = require('./models/review.model');

const setupModels = (sequelize) => {

    User.init(userSchema, User.config(sequelize));
    Address.init(addressSchema, Address.config(sequelize));
    Category.init(categorySchema, Category.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
    Order.init(orderSchema, Order.config(sequelize));
    Review.init(reviewSchema, Review.config(sequelize));

    User.associated(sequelize.models);
    Address.associated(sequelize.models);
    Category.associated(sequelize.models);
    Product.associated(sequelize.models);
    Order.associated(sequelize.models);
}

module.exports = {setupModels}