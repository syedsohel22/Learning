const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  gerne: String,
  auther: String,
  publishing_year: Number,
});


const bookModel= mongoose.model("book",bookSchema)
module.exports=bookModel