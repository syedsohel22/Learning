const { boardModel } = require("../models/board.model");

const getBoard = async (req, res, next) => {
  try {
    const board = await boardModel.findByID(req.param.id).populate("tasks");
    if (board == null) {
      return res.status(404).json({ msg: "Board Not Found" });
    }

    res.board = board;
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getBoard;
