//  do not forgot to export server
const express = require("express");
const app = express();
const fs = require("fs");
const { addID } = require("./middlewares/addID.middleware");
const { logger } = require("./middlewares/logger.middleware");
const { auth } = require("./middlewares/auth.middleware");
app.use(express.json());

app.use((req, res, next) => {
  fs.appendFileSync(
    "./logs.txt",
    `URL: ${req.url}, Method: ${req.method}, Timestamp:${Date()}\n`
  );
  next();
});

//get
app.get("/heroes", (req, res) => {
  try {
    let read = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    //{ OK: "Returns the details of all the heroes." }
    console.log(read);
    res.send(read.heroes);
  } catch (error) {
    res.send({ err: "Returns the error" });
  }
});

//post
// app.use(addID);
app.post("/add/hero", (req, res) => {
  try {
    let read = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    console.log(read.heroes);
    let id = read.heroes.length + 1;
    let newData = { id, ...req.body };
    console.log(newData);
    let mydata = read.heroes;
    mydata.push(newData);
    res.send(mydata);
  } catch (err) {
    res.send({ err: "Returns the error" });
  }
});

app.use(auth);

//patch
app.patch("/update/villain/:id", (req, res) => {
  try {
    let { id } = req.params;
    let arr = fs.readFileSync("./db.json", "utf-8");
    let ans;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        ans = arr[i];
      }
    }
    res.send(ans);
  } catch (error) {
    res.send({ err: "Returns the error" });
  }
});

//delete
app.delete("/delete/hero/:hero_id", (req, res) => {
  try {
    res.send({
      OK: "Returns the details of all the heroes after deleting this specific one.",
    });
  } catch (error) {
    res.send({ err: "Returns the error" });
  }
});

// app.listen(8080, () => {
//   console.log(8080);
// });

module.exports = app;
