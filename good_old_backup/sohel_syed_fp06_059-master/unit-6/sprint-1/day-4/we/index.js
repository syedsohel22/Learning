const express = require("express");
const fs = require("fs");
const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.end("Home Page");
});

app.post("add/blog", (req, res) => {
  console.log(req.body);
  res.end("New blog has been added");
});

//CREATE
app.post("/add/user", (req, res) => {
  //1.Read the complete db.json
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  //2. Add the data into users array
  data.users.push(req.body);
  //3. write the complete data to db.json
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.send("New user has been added");
});
//READ
app.get("/users", (req, res) => {
  //1. Read the file
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  //2. send the relevant response
  res.send(data.user);
});
app.listen(8080, () => {
  console.log("Running at port 8080");
});
