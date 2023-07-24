const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const connection = require("./config/db");
app.use(express.json());

app.listen(port, async () => {
  try {
    await connection;
    console.log("listening on port " + port);
    console.log("connected to DB");
  } catch (error) {
    console.log(error.message);
  }
});
