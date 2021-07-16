const express = require('express');
const makeConnection = require('./db/database');
require('dotenv').config();

const app = express();
makeConnection();

app.use(express.json());
app.use('/book', require('./controllers/book_controller'));



app.listen(process.env.PORT, () => {
  console.log('Aplicacion corriendo en el puerto: ' + process.env.PORT);
});
