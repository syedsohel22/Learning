const jwt = require("jsonwebtoken");
const blacklistModel = require("../model/blacklist.model");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || null;
    if (token) {
      let existingToken = await blacklistModel.find({
        blacklist: { $in: token },
      });

      if (existingToken.lenght > 0) {
        return res.status(400).send({ error: "please login again.!" });
      }

      let decoded = jwt.verify(token, "masai");
      req.body.userID = decoded.userID;
      return next();
    } else {
      res.status(400).send("Please login again.!");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { auth };
