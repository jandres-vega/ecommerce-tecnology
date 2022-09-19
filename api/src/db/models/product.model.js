const {DataTypes, Model} = require('sequelize');

const PRODUCT_NAME_TABLE = 'Products';

const productSchema = {
    name_product: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        Address: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}


class Product extends Model {

    static associated (models) {
        this.belongsTo(models.Category, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
        this.hasMany(models.Order, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }

    static config (sequelize) {
        return {
            sequelize
        }
    }
}

module.exports = {
    Product,
    productSchema,
    PRODUCT_NAME_TABLE
}
