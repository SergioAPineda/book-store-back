const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: { type: String},
    category: { type: String},
    author: { type: String }
  }
);

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;
