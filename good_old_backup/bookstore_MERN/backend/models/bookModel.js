import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      Type: String,
      require: true,
    },
    author: {
      Type: String,
      require: true,
    },
    publishYear: {
      Type: Number,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

export const Book = mongoose.model("books", bookSchema);
