const mongoose = require("mongoose");
//title, genre, author, publishing_year
const bookSchema = mongoose.Schema({
  title: String,
  genre: String,
  author: String,
  publishing_year: Number,
});

const bookModel = mongoose.model("books", bookSchema);

module.exports = {
  bookModel,
};
