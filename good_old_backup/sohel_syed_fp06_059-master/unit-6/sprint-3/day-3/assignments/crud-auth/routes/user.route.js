const express = require("express");
const { userModel } = require("../model/users.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

userRouter.get("/", (req, res) => {
  res.send("Home Page");
});

//Registration
userRouter.post("/register", async (req, res) => {
  //logic
  const { name, email, pass, age } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) {
        res.status(400).json({ err: err.message });
      } else {
        const user = new userModel({ name, email, pass: hash, age });
        await user.save();
      }
    });

    res
      .status(200)
      .json({ msg: "new user has been updated", Updateduser: req.body });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

//login OR Authntication
userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        // result == true
        if (result) {
          res.status(200).json({ msg: "login Successfull..!" });
        } else {
          res.status(200).json({ msg: "wrong Credentials" });
        }
      });
    } else {
      res.status(200).json({ msg: "User not Found " });
    }
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = {
  userRouter,
};
