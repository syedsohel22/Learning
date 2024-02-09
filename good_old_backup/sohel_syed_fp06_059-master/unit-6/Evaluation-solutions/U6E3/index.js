const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/users.Routes");
const { bookRouter } = require("./routes/books.Routes");
const app = express();
require("dotenv").config(); // environment variable configuration
app.use(express.json());

const port = process.env.port || 5000;
// Routes
app.use("/users", userRouter);
app.use("/books", bookRouter);

// listing to port and runing server
app.listen(port, async () => {
  try {
    await connection;
    console.log(`Running server on ${port}`);
  } catch (err) {
    console.log(err);
  }
});
