//  import required modules from nodejs and build the server
const express = require("express");
const app = express();
const validator = require("./middlewares/validator");
app.use(express.json());
app.use(validator);
app.post("/", (req, res) => {
  res.status(200).send("data received");
});

// app.listen(4200, () => {
//   console.log("running on port", 4200);
// });
// export the server
module.exports = app;
