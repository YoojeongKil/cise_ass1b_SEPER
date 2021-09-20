// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  pubyear: {
    type: String
  },
  doi: {
    type: String
  },
  sepractice: {
    type: String
  }
});

module.exports = Book = mongoose.model('book', BookSchema);