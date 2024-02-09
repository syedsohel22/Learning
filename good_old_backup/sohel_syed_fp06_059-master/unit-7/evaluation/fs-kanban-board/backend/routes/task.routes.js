const express = require("express");
const { taskModel } = require("../models/board.model");

const taskRouter = express.Router();

taskRouter.post("/boards/:boardId/tasks", getBoard, async (req, res) => {
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

module.exports = taskRouter;
