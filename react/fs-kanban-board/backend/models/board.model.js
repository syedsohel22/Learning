const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
  {
    name: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  {
    versionKey: false,
  }
);

const taskSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    status: { type: String, enum: ["Todo", "Doing", "Done"], default: "Todo" },
    subtask: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subtask" }],
  },
  {
    versionKey: false,
  }
);

const subTaskSchema = mongoose.Schema(
  {
    title: String,
    isCompleted: Boolean,
  },
  {
    versionKey: false,
  }
);

const boardModel = mongoose.model("board", boardSchema);
const taskModel = mongoose.model("task", taskSchema);
const subTaskModel = mongoose.model("subtask", subTaskSchema);

module.exports = { boardModel, taskModel, subTaskModel };
