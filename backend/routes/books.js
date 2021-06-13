const router = require('express').Router();
let Book = require('../models/book.model');

// GET
router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const year = Number(req.body.year);
  const description = req.body.description;
  const imageURL = (req.body.imageURL || 'https://leadershiftinsights.com/wp-content/uploads/2019/07/no-book-cover-available.jpg');

  const newBook = new Book({
    title,
    year,
    description,
    imageURL
  });

  newBook.save()
  .then(() => res.json('Book added.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// GET specific
router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE
router.route('/edit/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.title = req.body.title;
      book.year = Number(req.body.year);
      book.description = req.body.description;
      book.imageURL = (req.body.imageURL || 'https://leadershiftinsights.com/wp-content/uploads/2019/07/no-book-cover-available.jpg');

      book.save()
        .then(() => res.json('Book editted.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;