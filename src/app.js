const express = require("express");
const app = express();

app.use(express.json());

let notes = [];

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {
  const note = {
    id: Date.now(),
    text: req.body.text
  };
  notes.push(note);
  res.status(201).json(note);
});

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;