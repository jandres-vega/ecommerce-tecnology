const { Model, DataTypes } = require('sequelize');

const NAME_TABLE_USER = 'Users';

const userSchema = {
    first_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    email: {
        type: DataTypes.STRING(45),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
};

class User extends Model {

    static associated(models){
        //associaciones
        this.hasOne(models.Address, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
        this.hasMany(models.Order, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
    static config(sequelize){
        return {
            sequelize
        }

    }
}

module.exports = {
    userSchema,
    User,
    NAME_TABLE_USER
}