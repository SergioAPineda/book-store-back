const mongoose = require('mongoose');
require('dotenv').config();

const makeConnection = async () => {
  await mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log('Conectado a Mongo Atlas'))
    .catch((err) => console.log('error: ', err));
};

module.exports = makeConnection;