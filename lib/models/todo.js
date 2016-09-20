'use strict';

const Bookshelf = require('../util/bookshelf');

const Config = require('../../config');

module.exports = Bookshelf.Model.extend({
  tableName: 'todos',
  url: function () {
    return `${Config.DOMAIN}/${this.get('id')}`;
  },
  serialize: function () {
    return {
      id: this.get('id'),
      title: this.get('title'),
      url: this.url(),
      completed: this.get('completed'),
      order: this.get('order'),
      object: 'todo'
    };
  }
});

