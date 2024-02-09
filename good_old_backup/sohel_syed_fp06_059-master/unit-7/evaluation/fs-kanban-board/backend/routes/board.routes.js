const express = require("express");
const { boardModel, taskModel } = require("../models/board.model");
const { getBoard } = require("../middelware/getBoard.middelware.js");
const boardRouter = express.Router();

boardRouter.get("/", async (req, res) => {
  try {
    const boards = await boardModel.find().populate("task");
    res.send(boards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
boardRouter.post("/post", async (req, res) => {
  const { name } = req.body;
  const board = new boardModel({ name });
  try {
    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
boardRouter.patch("/update/:id", async (req, res) => {
  if (req.body.name !== null) {
    req.b;
  }
});
boardRouter.delete("/delete/:id", async (req, res) => {});

// for tasks

boardRouter.post("/boards/:boardId/tasks", getBoard, async (req, res) => {
  const { title, description, status } = req.body;
  const task = new taskModel({ title, description, status });

  try {
    await task.save();
    res.board.tasks.push(task);

    await res.board.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = boardRouter;
