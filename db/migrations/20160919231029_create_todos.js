'use strict';

exports.up = (Knex, Promise) => {
  return Knex.schema.createTable('todos', (table) => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.boolean('completed').defaultTo(false).notNullable();
    table.integer('order');
  });
};

exports.down = (Knex, Promise) => {
  return Knex.schema.dropTable('todos');
};
