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
    ISBN_REF: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: 'Book',
          key: 'ISBN',
      }
    },
    Goodreads_REF: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
          model: 'Book',
          key: 'Goodreads',
      }
    },
    user_comment: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: 'user',
            key: 'comment',
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    user_name: {
        type: DataTypes.STRING,
        references: {
          model: 'user',
          key: 'name',
        },
      },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'book',
          key: 'id',
        },
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
