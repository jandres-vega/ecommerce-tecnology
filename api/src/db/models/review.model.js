const { DataTypes, Model } = require('sequelize');

const NAME_TABLE_REVIEWS = 'Reviews';

const reviewSchema = {

    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT
    }
}

class Review extends Model {

    static associated(models){
        this.belongsTo(models.Product, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }
    static config(sequelize){
        return {
            sequelize
        }
    }
}

module.exports = {
    NAME_TABLE_REVIEWS,
    Review,
    reviewSchema
}