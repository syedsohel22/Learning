const timeLogger = (req, res, next) => {
  console.log("hello form the middleware");
  if (req.url === "/about") {
    next();
  } else {
    console.log("you don't have access to this route");
    res.send("you don't have access to this route");
  }
};

module.exports = { timeLogger };
