// import required modules
const express = require("express");
const app = express();
const multer = require("multer");

app.use(express.json());
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (res, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.send({ message: "welcome to server" });
});
app.post("/upload", upload.single("avatar"), (req, res) => {
  res.send({
    message: "file uploaded successfully",
  });
});
// export the server
// app.listen(8080, () => {
//   console.log("app is running at 8080");
// });
module.exports = app;
