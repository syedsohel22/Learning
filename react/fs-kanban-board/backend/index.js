const express = require("express");
const connection = require("./config/db");
require("dotenv").config();
const app = express();
const cors = require("cors");
const boardRouter = require("./routes/board.routes");

//middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Kanban Board api</h1>");
});

app.use("/board", boardRouter);

// Listing
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to atlas DB");
    console.log("server is running on PORT:", process.env.port);
  } catch (error) {
    console.log(error);
  }
});
