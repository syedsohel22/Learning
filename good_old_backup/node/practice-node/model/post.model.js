const mongoose = require("mongoose");

const postschema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  username: { type: String, required: true },
  categorites: { type: Array, required: true },
});

const postmodel = mongoose.model("post", postschema);
module.exports = postmodel;
