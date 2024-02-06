const authRouter = require("express").Router();
const userModel = require("../model/user.model");

authRouter.post("/register", async (req, res) => {
  try {
    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log("Error saving", error.message);
    res.status(500).json(error.message);
  }
});

authRouter.get("/getUser", (req, res) => {
  res.status(200).json({ msg: "User is available" });
});
module.exports = authRouter;
