const auth = (req, res, next) => {
  let url = req.params;
  let flag = false;
  console.log(url);
  for (k in url) {
    if (k == "auth" && k === "pass") {
      flag = true;
    }
  }
  if (flag) {
    next();
  }
};

module.exports = {
  auth,
};

//+1
