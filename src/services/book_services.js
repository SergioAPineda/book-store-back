const Book = require('../models/book');

const newBook = async (title, category, author) => {
  let book = new Book({
    title: title,
    category: category,
    author: author
  })
  return await book.save()
}

module.exports = newBook;