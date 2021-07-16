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

const getByCategory = async (param) => {
  let book = await Book.find()
  let newResult = book.filter(currentBook =>{
    if(currentBook.category === param){
      return currentBook
    }
  });
  
  return newResult; 
}



module.exports = {createBook, getAllBooks, getByCategory };
