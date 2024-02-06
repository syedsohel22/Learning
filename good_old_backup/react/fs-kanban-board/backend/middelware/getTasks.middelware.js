const { taskModel } = require("../models/board.model");

const getTask = async (req, res, next) => {
  try {
    const task = await taskModel.findById(req.param.taskId).populate("subtask");
    if (task == null) {
      res.status(404).json({ msg: "Task not Found" });
    }
    res.task = task;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
