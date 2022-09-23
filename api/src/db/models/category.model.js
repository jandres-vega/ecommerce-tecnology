const {DataTypes, Model} = require('sequelize');

const CATEGORY_NAME_TABLE = 'Categorys';

const categorySchema = {
    name_category: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    image_category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    }
};

class Category extends Model {

    static associated (models){
        this.hasMany(models.Product, {
            onDelete: 'CASCADE', onUpdate: 'CASCADE'
        })
    }
    static config (sequelize) {
        return {
            sequelize
        }
    }
}

module.exports = {
    Category,
    categorySchema,
    CATEGORY_NAME_TABLE
}