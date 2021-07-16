const express = require('express');
const {createBook, getAllBooks} = require('../services/book_services');
const schema = require('../utils/data_validator')

const route = express.Router();

route.post('/', (req, res) => {
  let body = req.body;
  const {error, value} = schema.validate({ 
    title:     body.title,
    category:  body.category,
    author:    body.author,
  });
  if(!error){
    let result = createBook(body);

    result.then( book => {
      res.json({
        value: book
      })
    }).catch(error => {
      res.status(400).json({
        err: error
      })
    })
  }else{
    res.status(400).json({
      err: error
    })
  }

})

route.get("/all", (req, res) => {
  let result = getAllBooks();
  result.then(resultValue => {
    res.json({
      result: resultValue
    })
  }).catch(err => {
    res.status(400).json({
      error: err
    })
  });
});

module.exports = route;