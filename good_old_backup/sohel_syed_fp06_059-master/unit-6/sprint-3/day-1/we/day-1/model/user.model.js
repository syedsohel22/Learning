const mongoose = require("mongoose");

//schema
const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    location: String,
    is_married: Boolean,
    followers: Number,
  },
  {
    versionKey: false,
  }
);

//model
const UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel,
};
