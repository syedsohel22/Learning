const express = require("express");

const validpass = (req, res, next) => {
  const { pass } = req.body;
  const check = pass.split("");
  let lenghtflag = false;
  let numberflag = false;
  let capticalflag = false;
  let symbolflag = false;
  for (let i = 0; i < check.length; i++) {
    if (typeof check[i] === Number) {
      numberflag = true;
    }
    if (check.includes("#" || "!" || "@")) {
      symbolflag = true;
    }
  }
  if (pass.length < 8) {
    res.status(200).json({ msg: "password lenght must be 8 character long" });
  } else if (numberflag) {
    res.status(200).json({ msg: "password must contains a number" });
  } else if (!symbolflag) {
    res.status(200).json({ msg: "password must contains a symbol" });
  } else {
    next();
  }
};

module.exports = {
  validpass,
};
