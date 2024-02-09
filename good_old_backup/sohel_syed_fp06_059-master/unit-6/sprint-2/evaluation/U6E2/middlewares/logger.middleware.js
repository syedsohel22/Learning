const fs = require("fs");
const logger = (req, res, next) => {
  fs.writeFileSync("../logs.txt", `${req.method}`);
  next();
};

module.exports = {
  logger,
};

//+0.5
