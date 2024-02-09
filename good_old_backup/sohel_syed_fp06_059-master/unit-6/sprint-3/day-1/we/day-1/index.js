const express = require("express");

const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.listen(4500, async () => {
  //connection logic will go here.!
  try {
    await connection;
    console.log("Running the server on port 4500");
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err.message);
    console.log("Something went Wrong..!");
  }
});
