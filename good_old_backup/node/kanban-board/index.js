// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// Set up the app
const app = express();
app.use(bodyParser.json());

// Connect to the database
mongoose.connect(process.env.atlaspath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define models
const Board = mongoose.model("Board", {
  name: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

const Task = mongoose.model("Task", {
  title: String,
  description: String,

  status: {
    type: String,
    enum: ["Todo", "Doing", "Done"],
    default: "Todo",
  },
  subtask: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subtask" }],
});

const Subtask = mongoose.model("Subtask", {
  title: String,
  isCompleted: Boolean,
});

// API routes for boards
app.get("/boards", async (req, res) => {
  try {
    const boards = await Board.find().populate("tasks");
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/boards", async (req, res) => {
  const { name } = req.body;
  const board = new Board({ name });

  try {
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/boards/:id", getBoard, (req, res) => {
  res.json(res.board);
});

app.patch("/boards/:id", getBoard, async (req, res) => {
  if (req.body.name != null) {
    res.board.name = req.body.name;
  }

  try {
    await res.board.save();
    res.json(res.board);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/boards/:id", getBoard, async (req, res) => {
  try {
    await res.board.remove();
    res.json({ message: "Board deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API routes for tasks
app.post("/boards/:boardId/tasks", getBoard, async (req, res) => {
  const { title, description, status } = req.body;
  const task = new Task({ title, description, status });
  console.log(req.params);
  try {
    await task.save();
    res.board.tasks.push(task);
    await res.board.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// API routes for subtasks
app.post("/tasks/:taskId/subtasks", getTask, async (req, res) => {
  const { title, isCompleted } = req.body;
  const subtask = new Subtask({ title, isCompleted });

  try {
    await subtask.save();
    res.task.subtask.push(subtask);
    await res.task.save();
    res.status(201).json(subtask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware to get a board by ID
async function getBoard(req, res, next) {
  console.log(req.params.boardId);
  try {
    const board = await Board.findById(req.params.boardId).populate("tasks");
    if (board == null) {
      return res.status(404).json({ message: "Board not found" });
    }
    res.board = board;
    console.log("board===>", board, "\n");

    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

// Middleware to get a task by ID
async function getTask(req, res, next) {
  try {
    const task = await Task.findById(req.params.taskId).populate("subtask");
    if (task == null) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.task = task;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
