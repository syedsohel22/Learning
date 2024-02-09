//  do not forgot to export server
// module.exports = app;
const express = require("express");
const fs = require("fs");
const { addID } = require("./middlewares/addID.middleware");
const { logger } = require("./middlewares/logger.middleware");
const { auth } = require("./middlewares/auth.middleware");
const app = express();

app.use(express.json());

app.use(logger);
app.get("/heroes", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send(data.heroes);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/add/hero", addID, (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.heroes.push(req.body);
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send(data.heroes);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.use(auth);

app.patch("/update/villain/:hero_id", (req, res) => {
  try {
    const id = +req.params.hero_id;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let flag = false;
    let hero;
    for (let i = 0; i < data.heroes.length; i++) {
      if (data.heroes[i].id === id) {
        flag = true;
        data.heroes[i].villains.push(req.body);
        hero = { ...data.heroes[i] };
      }
    }

    if (!flag) {
      res.status(400).send({ message: "Hero not found" });
    } else {
      fs.writeFileSync("./db.json", JSON.stringify(data));
      res.send(hero);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
app.delete("/delete/hero/:hero_id", (req, res) => {
  try {
    const id = +req.params.hero_id;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const newData = data.heroes.filter((el) => {
      return el.id !== id;
    });
    data.heroes = [...newData];
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send(data.heroes);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = app;
