const Book = require('../models/book');

const createBook = async (body) => {
  let newBook = new Book({
    title: body.title,
    category: body.category,
    author: body.author
  })
  return await newBook.save()
}

const getAllBooks = async () => {
  let books = await Book.find()
  return books 
}

const getByCategory = async (param) => {
  let listOfBook = await Book.find()
  let newResult = listOfBook.filter(currentBook =>{
    if(currentBook.category === param){
      return currentBook
    }
  });
  
  return newResult; 
}



module.exports = {createBook, getAllBooks, getByCategory };
