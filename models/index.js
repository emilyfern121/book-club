//Pathways for models User and Book to be exported
const User = require('./User');
const Book = require('./Book');
const Discussion = require('./Discussion');

  
User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Discussion, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Discussion.belongsTo(User, {
  foreignKey: 'user_id',
});

Book.hasMany(Discussion, {
  foreignKey: 'book_id',
});

Discussion.belongsTo(User, {
  foreignKey: 'book_id',
});
  
module.exports = {User, Book, Discussion};