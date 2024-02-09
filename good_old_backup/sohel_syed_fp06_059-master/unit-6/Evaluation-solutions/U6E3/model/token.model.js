const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema({
  blacklist: { type: [String] },
});

const blacklistModel = mongoose.model("blacklist", blackListSchema);

module.exports = blacklistModel;
