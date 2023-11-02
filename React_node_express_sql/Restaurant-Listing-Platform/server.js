// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const resRouter = require("./routes/restaurantRoutes");
app.use(bodyParser.json());
app.use("/api/v1/restaurants", resRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
