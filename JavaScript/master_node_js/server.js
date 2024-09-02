import express from "express";
import "dotenv/config";
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// * Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// import routes
import apiRoutes from "./routes/api.js";

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
