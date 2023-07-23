const express = require("express");

const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.port || 5000;
mongoose.connect(process.env.altaspath);
app.listen(port, () => {
  console.log("server listening on port", port);
});
