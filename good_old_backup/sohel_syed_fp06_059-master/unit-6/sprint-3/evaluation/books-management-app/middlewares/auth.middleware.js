const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decodedToken = jwt.verify(token, "masai");
      if (decodedToken) {
        next();
      } else {
        res.status(200).json({ msg: "worng token" });
      }
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  } else {
    res.json({ msg: "please provide token" });
  }
};

module.exports = {
  auth,
};
