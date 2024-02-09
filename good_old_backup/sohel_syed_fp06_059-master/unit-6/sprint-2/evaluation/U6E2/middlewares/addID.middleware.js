const fs = require("fs");
const addID = (req, res, next) => {
  let read = JSON.parse(fs.readFileSync("../db.json", "utf-8"));

  let id = read.heroes.length + 1;
  next();
 // return id;
};

module.exports = {
  addID,
};

//+1
