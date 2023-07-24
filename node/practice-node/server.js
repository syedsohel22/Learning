const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, () => {
  console.log("listening on port " + port);
});
