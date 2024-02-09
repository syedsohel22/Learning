const fs = require("fs");
const addID = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  const id = data.heroes[data.heroes.length - 1].id;
  req.body["id"] = id + 1;
  next();
};

module.exports = {
  addID,
};

//+1
