const express = require("express");
const app = express();
const { connection } = require("./db");

const { userRouter } = require("./routes/user.route");
require("dotenv").config();
app.use(express.json());

app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to the DB");
    console.log(`server running on port ${process.env.port}`);
  } catch (error) {}
});
