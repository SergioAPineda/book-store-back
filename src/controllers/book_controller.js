const newBook = require('../services/book_services');

const createBook = (req, res) => {
  let body = req.body;
  const {error, value} = schema.validate({ 
    title :          body.title,
    category:          body.category,
    author:    body.author
  });
  if(!error){
    let result = newBook(body.title, body.category, body.author);

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

}