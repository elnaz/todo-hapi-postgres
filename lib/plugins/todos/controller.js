'use strict';

const Todo = require('../../models/todo');

exports.create = (payload) => {
  return new Todo().save(payload)
  .then((todo) => todo.fetch());
};

exports.list = () => {
  return new Todo().fetchAll();
};

exports.deleteAll = () => {
  // hack to get around Bookshelf's lacking destroyAll
  return new Todo().where('id', '!=', 0).destroy()
  .then(() => []);
};

exports.retrieve = (id) => {
  return new Todo({ id }).fetch();
};

exports.update = (id, payload) => {
  return new Todo({ id }).save(payload)
  .then((todo) => todo.fetch());
};

exports.delete = (id) => {
  return new Todo({ id }).destroy()
  .then(() => {
    return { success: true };
  });
};
