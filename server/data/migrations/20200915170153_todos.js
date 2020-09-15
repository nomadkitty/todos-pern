exports.up = function (knex) {
  return knex.schema.createTable("todos", (tbl) => {
    tbl.increments();
    tbl.string("description", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todos");
};
