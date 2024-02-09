const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongoatlasURL);

//schema
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  city: String,
  age: Number,
});
//model
const userModel = mongoose.model("user", userSchema);

module.exports = {
  userModel,
  connection,
};
