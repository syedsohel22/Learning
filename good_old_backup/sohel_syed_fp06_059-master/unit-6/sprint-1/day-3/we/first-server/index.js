const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/contact") {
    res.end("Conatact Page");
  } else if (req.url === "/users") {
    try {
      const data = fs.readFileSync("./db.json", "utf-8");
      res.end(data);
    } catch (error) {
      res.end(error);
    }
  } else {
    res.end("404 Page");
  }
});

server.listen(8080, () => {
  console.log("server is Runing");
});
