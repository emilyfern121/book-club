const { Book } = require('../models')

const bookdata = [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "ISBN": "9780743273565",
      "Goodreads": "0743273567",
      "rating": 3.9,
      "comment": "Needs more parties"
    },
    {
      "title": "Moby Dick",
      "author": "Herman Melville",
      "ISBN": "9781602701557",
      "Goodreads": "1602701555",
      "rating": 3.5,
      "comment": "Not enough whales"
    },
    {
      "title": "The Odyssey",
      "author": "Homer",
      "ISBN": "9780143039952",
      "Goodreads": "0143039954",
      "rating": 3.7,
      "comment": "Where is Hercules!???"
    }
  ]

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;




