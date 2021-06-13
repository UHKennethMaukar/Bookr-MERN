const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, default: 'https://leadershiftinsights.com/wp-content/uploads/2019/07/no-book-cover-available.jpg' }
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;