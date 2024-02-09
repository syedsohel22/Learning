const express = require("express");
const os = require("os");
const fs = require("fs");
const app = express();

//middle ware
app.use(express.json());
// for home Route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

// for post Route
app.post("/add/student", (req, res) => {
  //read db.json
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  let newData = {
    id: os.userInfo().uid,
    name: os.userInfo().username,
    ...req.body,
  };

  data.students.push(newData);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send(data.students);
  //   try {
  //   } catch (error) {
  //     res.send(error);
  //   }

  //console.log("data", newData);
});

app.post("/add/instructor", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let newData = {
    id: os.userInfo().uid,
    name: os.userInfo().username,
    ...req.body,
  };

  app.get("/students", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send(data.students);
  });

  app.get("/instructors", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send(data.instructors);
  });
  data.instructors.push(newData);
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send(data.instructors);
});

app.get("/tickets", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let c = 0;
  let t_arr = data.students;
  for (let i = 0; i < t_arr.length; i++) {
    if (t_arr[i].tickets) {
      for (let j = 0; j < t_arr[i].tickets.length; j++) {
        if (ticket_id) {
          c++;
        }
      }
    }
  }
  res.send("Total number of tickets in the system are " + `${c}`);
});
module.exports = app;
