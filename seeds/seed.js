const sequelize = require('../config/connection');
const { User, Book, Discussion } = require('../models');
const userData = require('./userData.json');
const bookData = require('./bookData.json');
const discussionData = require('./discussionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  /**
   * ! Needs to be filled in for discussion.json
   */

  for (const book of bookData) {
    await Book.create({
      ...book,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();

