const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model{}

Review.init(
{
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  reviewcontent: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'review',
}
);

module.exports = Review;

