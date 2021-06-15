//Pathways for models User and Book to be exported
const user = require('./User');
const book = require('./Book');

  
  User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });
  
  Book.belongsTo(User, {
    foreignKey: 'user_id',
  });
  

module.exports = {User, Book};