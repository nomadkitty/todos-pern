const express = require("express");

const TodosDB = require("./todos-model.js");

const router = express.Router();

// add a todo
router.post("/", (req, res) => {
  TodosDB.add(req.body)
    .then((todo) => {
      res.status(200).json(todo);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Can't add to do",
      });
    });
});

// get all todos
router.get("/", (req, res) => {
  TodosDB.find()
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => {
      res.status(500).json({ error: "Todos could not be retrieved" });
    });
});

// get a todo by id
router.get("/:id", (req, res) => {
  TodosDB.findById(req.params.id).then((todo) => {
    todo
      ? res.status(200).json(todo)
      : res.status(400).json({ error: "Todo not found" });
  });
});

// update a todo by id
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  TodosDB.update(id, changes)
    .then((todo) => {
      res.status(200).json(todo);
    })
    .catch((err) => {
      res.status(500).json({ error: "Can't update todo" });
    });
});

// delete a todo
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  TodosDB.remove(id)
    .then((todo) => {
      res.status(200).json(id);
    })
    .catch((err) => {
      res.status(500).json({ error: "Can't delete todo" });
    });
});

module.exports = router;
