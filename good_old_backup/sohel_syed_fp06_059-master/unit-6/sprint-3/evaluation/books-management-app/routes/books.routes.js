const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const bookRouter = express.Router();
const { bookModel } = require("../models/book.model");

//post route
bookRouter.post("/add", auth, async (req, res) => {
  const { title, genre, author, publishing_year } = req.body;
  try {
    const book = new bookModel({ title, genre, author, publishing_year });
    await book.save();
    res.status(200).json({ mas: "Book added", addedBook: req.body });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// GET
bookRouter.get("/", auth, async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).send(books);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

//pathc
bookRouter.patch("/update/:id", auth, async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    await bookModel.findOneAndUpdate({ _id: id }, payload);
    res.status(200).json({ msg: "Book has been updated" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

//delete
bookRouter.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const deleteBook = await bookModel.find({ id: _id });
    await bookModel.findOneAndDelete({ _id: deleteBook });
    res.status(200).json({ msg: "Book has been deleted" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = {
  bookRouter,
};
