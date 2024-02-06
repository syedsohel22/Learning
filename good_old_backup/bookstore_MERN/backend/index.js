import express from "express";
import mongoose, { Mongoose } from "mongoose";
import { PORT, MONGO_URL } from "./config.js";

import { Book } from "./models/bookModel.js";
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to my api");
});

//

app.post("/book", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(404).send({
        message: "send all required fields: title, author, publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: error.message });
  }
});

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`app connected to database.`);
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
