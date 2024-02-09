const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const { userRouter } = require("./routes/users.routes");
const { bookRouter } = require("./routes/books.routes");
const app = express();
app.use(express.json());

// Routing
app.use("/users", userRouter);
app.use("/books", bookRouter);


app.get("/", (req, res) => {
  res.status(200).json({ msg: "Home Page" });
});



app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to The AtlasDB");
    console.log(`server is running on port ${process.env.port}`);
  } catch (err) {
    console.log(err);
  }
});
