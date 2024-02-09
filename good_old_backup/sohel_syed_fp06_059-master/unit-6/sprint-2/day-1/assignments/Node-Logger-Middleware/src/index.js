// import required modules
const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");

app.use(express.json());

let accesslogStream = fs.createWriteStream("./src/access.log", {
  flags: "a",
});

app.use(
  morgan(
    (tokens, req, res) => {
      let response = [
        tokens.method(req, res),
        tokens.status(req, res),
        tokens.res(req, res, "content-length"),
        `${tokens["response-time"](req, res)}ms`,
        tokens.date(req, res),
        tokens["http-version"](req, res),
        tokens.url(req, res),
      ].join(", ");
      return response;
    },
    { stream: accesslogStream }
  )
);

app.get("/", (req, res) => {
  res.status(200).send({ message: "welcome to server" });
});

app.get("/get-users", (req, res) => {
  res.status(200).send({
    message: "here is the list of all users",
  });
});

app.post("/add-user", (req, res) => {
  res.status(201).send({
    message: "user added successfully",
  });
});

app.put("/user/:id", (req, res) => {
  const id = +req.params.id;
  res.status(201).send({
    message: `user ${id} updated successfylly`,
  });
});
app.delete("/user/:id", (req, res) => {
  const id = +req.params.id;
  res.send({
    message: `user ${id} deleted successfylly`,
  });
});
// export the server
module.exports = app;
