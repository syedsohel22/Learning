// your code goes here
const express = require("express");
const app = express();
app.get("/multiply", (req, res) => {
  if (Object.keys(req.query).length) {
    const { a, b } = req.query;
    if (isNaN(a) && isNaN(b)) {
      res.status(400).send({ error: `Both "a" and "b" must be numbers` });
    } else if (isNaN(a)) {
      res.status(400).send({ error: `"a" is not a valid number` });
    } else if (isNaN(b)) {
      res.status(400).send({ error: `"b" is not a valid number` });
    } else {
      const product = +a * +b;
      res.status(200).send({ product });
    }
  } else {
    res.status(400).send({ error: `Both "a" and "b" are required parameters` });
  }
});

module.exports = app;
