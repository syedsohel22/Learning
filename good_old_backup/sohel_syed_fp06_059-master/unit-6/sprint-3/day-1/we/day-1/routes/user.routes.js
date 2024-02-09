const express = require("express");
const { UserModel } = require("../model/user.model");
const userRouter = express.Router();

// adding the user
userRouter.post("/add", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.status(200).json({ msg: "A new user has been added to the DB" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

//get the all users
userRouter.get("/", async (req, res) => {
  const query = req.query;
  try {
    const users = await UserModel.find(query);
    const user = res.status(200).send(users);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
});

//update user
userRouter.patch("/update/:userID", async (req, res) => {
  const { userID } = req.params;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: userID }, payload);
    const updatedUser = await UserModel.find({ _id: userID });
    res
      .status(200)
      .json({ msg: "data has been updated", user: updatedUser[0] });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

//delete user
userRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const deletetedUser = await UserModel.find({ _id: userID });
    await UserModel.findByIdAndDelete({ _id: userID });
    res
      .send(200)
      .json({ msg: "the user has been Deleted", deltedUser: deletetedUser });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = {
  userRouter,
};
