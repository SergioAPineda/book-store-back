const Book = require('../models/Book');

const createBook = async (body) => {
  let book = new Book({
    title: body.title,
    category: body.category,
    author: body.author
  })
  return await book.save()
}

const getAllBooks = async () => {
  let books = await Book.find()
  return books 
}



module.exports = {createBook, getAllBooks };
