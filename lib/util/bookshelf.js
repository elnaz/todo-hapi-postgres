'use strict';

const DatabaseConfig = require('../../db');

const Bookshelf = require('bookshelf');
const Knex      = require('knex')(DatabaseConfig);

module.exports = Bookshelf(Knex);
