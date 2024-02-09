const express = require("express");
const connection = require("./config/db");
const MovieModal = require("./models/movie.model");
const app = express();
app.use(express.json);

app.get("/", async (req, res) => {
  const movies = await MovieModal.find();

  res.send(movies);
});
app.listen(4042, () => {
  console.log("running on port 4042");
});
