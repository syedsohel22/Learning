const express = require("express");
var bodyParser = require("body-parser");

require("./model/index");
const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(4000, () => {
  console.log(`app will run on :  http://localhost:3000`);
});
