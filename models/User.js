//Utilizing npm sequelize classes Model and Datatypes
const {Model, Datatypes} = require('sequelize');
//Import connection.js to connect to DB
const sequelize = require('../config/connection');
//Import for pw hashing function
const bcrypt = require('bcrypt');

//User class based on Model from sequelize that represents a table in the DB
//Checks users login pw vs that of the pw stored in DB
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}//End of User class

//User initilization 
User.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        email:{
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        rating: {
            type: Datatypes.INTEGER,
            allowNull: true,
            validate:{
                max:5,
                min:1,
            }
        },
        comment: {
            type: Datatypes.STRING,
            allowNull: true,
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len:[8]
            }
        }

},//End of User.init
{
    hooks: {
        beforeCreate: async(newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        }//end of beforeCreate
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
}
);

module.exports = User;