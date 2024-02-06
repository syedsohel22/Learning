// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const resRouter = require("./routes/restaurantRoutes");
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/restaurants", resRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
