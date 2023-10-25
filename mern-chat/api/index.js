const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;
const { userModel } = require("./models/User.Models");
/******************************************************************************************************************************************** */
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await userModel.create({ username, password });

    jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
      if (err) throw err;
      res
        .cookie("chat-token", token)
        .status(201)
        .json({ message: "your created okay" });
    });
  } catch (error) {
    res.json({ error: error });
  }
});

/******************************************************************************************************************************************** */

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
