//Pathways for models User and Book to be exported
const User = require('./User');
const Book = require('./Book');
const Discussion = require('./Discussion');

  
User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Discussion, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Discussion, {
  foreignKey: 'user_name',
  onDelete: 'CASCADE',
});

User.hasMany(Discussion, {
  foreignKey: 'user_comment',
  onDelete: 'CASCADE',
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
});

Book.hasMany(Discussion, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE',
});

Discussion.belongsTo(User, {
  foreignKey: 'user_id',
});

Discussion.belongsTo(User, {
  foreignKey: 'user_comment',
});

Discussion.belongsTo(User, {
  foreignKey: 'user_name',
});

Discussion.belongsTo(Book, {
  foreignKey: 'book_id',
});

Discussion.belongsTo(Book, {
  foreignKey: 'Goodreads',
});

Discussion.belongsTo(Book, {
  foreignKey: 'ISBN',
});
  

module.exports = {User, Book};