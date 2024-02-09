const express = require("express");
const app = express();
const fs = require("fs");
const { timeLogger } = require("./middleware/timeLogger.middleware");
//app.use(timeLogger);
app.use((req, res, next) => {
  fs.appendFileSync(
    "./log.txt",
    `\n the route is ${req.url} | time:${Date()} |method:${req.method}`
  );

  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/data", (req, res) => {
  res.send("Data Page");
});

app.listen(4200, () => {
  console.log("running on port 4200");
});
