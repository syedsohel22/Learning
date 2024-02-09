const fs = require("fs");

// make the validator function and export it.
const validator = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  if (!ID || !Name || !Rating || !Description || !Genre || !Cast) {
    res.status(400).send("invalid request body.");
  } else {
    if (
      typeof ID !== "number" ||
      typeof Name !== "string" ||
      typeof Rating !== "number" ||
      typeof Description !== "string" ||
      typeof Genre !== "string" ||
      !Array.isArray(Cast) ||
      Cast.some((el) => typeof el !== "string")
    ) {
      res.status(400).send("bad request.some data is incorrect.");
      fs.writeFileSync(
        "../../res.txt",
        " bad request.some data is incorrect.\n"
      );
    } else {
      fs.appendFileSync("../../res.txt", "ID is a number\n");
      fs.appendFileSync("../../res.txt", "Name is a string\n");
      fs.appendFileSync("../../res.txt", "Rating is a number\n");
      fs.appendFileSync("../../res.txt", "Name is a string\n");
      fs.appendFileSync("../../res.txt", "Description is a string\n");
      fs.appendFileSync("../../res.txt", "Genre is a string\n");
      fs.appendFileSync("../../res.txt", "Cast is a array\n");
      next();
    }
  }
};

module.exports = validator;
