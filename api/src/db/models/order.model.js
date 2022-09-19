const {DataTypes, Model} = require('sequelize');

const ORDER_NAME_TABLE = 'Orders';

const orderSchema = {
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
};

class Order extends Model {

    static associated (models) {
        this.belongsTo(models.User, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
        this.belongsTo(models.Product, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})

    }
    static config (sequelize){
        return {
            sequelize
        }
    }
}
module.exports = {
    Order,
    orderSchema,
    ORDER_NAME_TABLE
}

