const mongoose = require('mongoose');

const URI = process.env.mongodb_uri 
  ? process.env.mongodb_uri 
  : 'mongodb://localhost/tasks-app-test';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB is connected');
});