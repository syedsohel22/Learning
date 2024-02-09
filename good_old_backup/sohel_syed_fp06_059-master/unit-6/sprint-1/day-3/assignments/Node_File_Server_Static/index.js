const http = require("http");
const fs = require("fs");
const PORT = 7700;

const server = http.createServer((req, res) => {
  // Setting up the 'home' route manually
  if (req.url === "/") {
    const current = fs.readdirSync(__dirname);
    res.writeHead(200, { "Content-Type": "text/html" });
    current.map((item) => res.write(`<a href="/${item}"><li>${item}</li></a>`));
    res.end();
  }

  // Setting up the 'public' route manually
  else if (req.url === "/public") {
    const current = fs.readdirSync(`${__dirname + req.url}`);
    res.writeHead(200, { "Content-Type": "text/html" });
    current.map((item) =>
      res.write(`<a href="${req.url}/${item}"><li>${item}</li></a>`)
    );
    res.end();
  }

  // Setting up the 'others' route manually
  else if (req.url === "/public/others") {
    const current = fs.readdirSync(`${__dirname + req.url}`);
    res.writeHead(200, { "Content-Type": "text/html" });
    current.map((item) =>
      res.write(`<a href="${req.url}/${item}"><li>${item}</li></a>`)
    );
    res.end();
  }

  // Reading the 'test.txt' file manually
  else if (req.url === "/public/others/test.txt") {
    const content = fs.readFileSync(`${__dirname + req.url}`);
    res.writeHead(200, { "Content-Type": "text/plain" }); // Optional
    res.end(content);
  }

  // Setting up 'Page Not Found' route
  else res.end("404 Not Found");
});

// export your server
module.exports = server;
