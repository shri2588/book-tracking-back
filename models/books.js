const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema({

    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookGenre: {
        type: String,
        required: true
    },
    imageId: {
        type: String,
        required: true
    }, 
});

module.exports = mongoose.model('Books', booksSchema);