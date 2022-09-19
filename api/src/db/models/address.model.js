const {DataTypes, Model} = require('sequelize');

const ADDRESS_NAME_TABLE = 'Address';

const addressSchema = {
    city: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    zip_code: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
};

class Address extends Model {

    static associated(models){
        //asociaciones
        this.belongsTo(models.User, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
    static config(sequelize){
        return {
            sequelize
        }
    }
}

module.exports ={
    Address,
    addressSchema,
    ADDRESS_NAME_TABLE
}

