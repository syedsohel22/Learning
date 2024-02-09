const express = require("express");
const { userModel } = require("../db");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validpass } = require("../middlewares/passwor.middleware");
//

// ==> /users/register
userRouter.post("/register", validpass, async (req, res) => {
  const { name, email, pass, city, age } = req.body;
  let unique = await userModel.findOne({ email });
  if (unique) {
    res
      .status(200)
      .json({ msg: "email is already used try with diffrent email.!" });
  }
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.status(400).json({ err: err.message });
      } else {
        const user = new userModel({ name, email, pass: hash, age, city });
        await user.save();
      }
    });
    res.status(200).json({
      msg: "The new user has been registered",
      registeredUser: req.body,
    });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

// ==> /users/login

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (user) {
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ foo: "bar" }, "masai");
          res
            .status(200)
            .json({ msg: "login succesFully", token: token, refreshToken: "" });
        }
      });
    } else {
      res.status(200).json({ msg: "user not found" });
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

module.exports = {
  userRouter,
};
