const { Book } = require('../models')

const bookdata = [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald"
    },
    {
      "title": "Moby Dick",
      "author": "Herman Melville"
    },
    {
      "title": "The Odyssey",
      "author": "Homer"
    }
  ]

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;

