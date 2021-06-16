const { Book } = require('../models')

const bookdata = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      ibsn: "",
    },
    {
      title: "Moby Dick",
      author: "Herman Melville",
      ibsn: "",
    },
    {
      title: "The Odyssey",
      author: "Homer",
      ibsn: "",
    }
  ]

const seedBook = () => Book.bulkCreate(bookdata);

module.exports = seedBook;

