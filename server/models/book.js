const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const bookSchema = mongoose.Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = mongoose.model('Book', bookSchema);
