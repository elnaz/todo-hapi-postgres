'use strict';

const Config = require('../config');

module.exports = {
  client: 'postgresql',
  connection: Config.DATABASE_URL || {
    database: Config.DB_NAME,
    host: Config.DB_HOST,
    username: Config.DB_USER,
    password: Config.DB_PASSWORD
  }
};
