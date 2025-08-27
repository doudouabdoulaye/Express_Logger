const express = require("express");
const router = express.Router();

// Stockage en mémoire pour les tâches
let tasks = [
  { id: 1, title: "Apprendre Express", done: false },
  { id: 2, title: "Faire les Brief", done: true },
  { id: 3, title: "coder", done: true }
];

// GET /tasks - Lister toutes les tâches
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST /tasks - Ajouter une tâche
router.post("/", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Le champ 'title' est requis." });
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    done: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

module.exports = router;
