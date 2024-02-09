const mongoose = require("mongoose");
const main = async () => {
  //connection logic
  try {
    const connection = await mongoose.console.log("to the DB");
    console.log("Disconnected now! ! ");
    connection.disconnect();
  } catch (err) {
    console.log("in connecting to the DB");
    console.log(err);
  }
};
main();
