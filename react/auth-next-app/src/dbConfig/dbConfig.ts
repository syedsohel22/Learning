import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.mongo_url!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully.");
    });

    connection.on("error", (err) => {
      console.log(err);
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
