const db = require("../../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("todos");
}

function findById(id) {
  return db("todos").where({ id }).first();
}

function add(todo) {
  return db("todos")
    .insert(todo, "id")
    .then(([id]) => {
      return this.findById(id);
    });
}

function update(id, changes) {
  return db("todos")
    .where({ id })
    .update(changes)
    .then((count) => (count > 0 ? this.findById(id) : null));
}

function remove(id) {
  return db("todos").where({ id }).del();
}
