// import express from "express";
// import mysql from "mysql";
// import cors from "cors";

// const app = express();
// app.use(cors());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "crud",
// });
// db.connect((error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("Successfully connected with Database");
// });

// app.get("/hi", (req, res) => {
//   res.json({ Message: "hi, I am working" });
// });
// app.get("/", (req, res) => {
//   const sql = "SELECT * FROM student";
//   db.query(sql, (err, result) => {
//     if (err) return res.json({ Message: "Error executing", details: err });

//     return res.json({ result });
//   });
// });

// app.post("/student", (req, res) => {
//   const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
//   const value = [req.body.name, req.body.email];
//   db.query(sql, [value], (err, result) => {
//     if (err) return res.json(err);
//     return res.json({ result });
//   });
// });
// app.listen(8081, () => {
//   console.log(`listening on 8081`);
// });

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8081;

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "crud",
  //   host: "localhost",
  //   user: "root",
  //   password: "root",
  //   database: "crud",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error: " + err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// Define your API routes here

// Create a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO student (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) {
        console.error("MySQL error: " + err.message);
        res.status(500).send("Error while creating user");
      } else {
        res.status(201).json({ id: result.insertId, name, email });
      }
    }
  );
});

// Read all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM student", (err, results) => {
    if (err) {
      console.error("MySQL error: " + err.message);
      res.status(500).send("Error while fetching users");
    } else {
      res.status(200).json(results);
    }
  });
});

// Read a single user by ID
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  db.query("SELECT * FROM student WHERE id = ?", [userId], (err, results) => {
    if (err) {
      console.error("MySQL error: " + err.message);
      res.status(500).send("Error while fetching user");
    } else if (results.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Update a user by ID
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  db.query(
    "UPDATE student SET name = ?, email = ? WHERE id = ?",
    [name, email, userId],
    (err, result) => {
      if (err) {
        console.error("MySQL error: " + err.message);
        res.status(500).send("Error while updating user");
      } else if (result.affectedRows === 0) {
        res.status(404).send("User not found");
      } else {
        res.status(200).json({ id: userId, name, email });
      }
    }
  );
});

// Delete a user by ID
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  db.query("DELETE FROM student WHERE id = ?", [userId], (err, result) => {
    if (err) {
      console.error("MySQL error: " + err.message);
      res.status(500).send("Error while deleting user");
    } else if (result.affectedRows === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(204).send();
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
