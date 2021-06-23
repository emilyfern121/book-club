const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Discussion extends Model {}

Discussion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Book',
          key: 'id',
      }
    },
    user_comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Discussion'
  }
);

module.exports = Discussion;
