const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    passwoes: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", UserSchema);

module.exports = { userModel };
