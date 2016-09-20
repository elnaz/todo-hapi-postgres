'use strict';

const Hapi = require('hapi');

const Config = require('../config');

const server = new Hapi.Server();

server.connection({
  port: Config.PORT,
  routes: { cors: true }
});

server.register([
  {
    register: require('hapi-format-error'),
    options: { joiStatusCode: 422 }
  },
  require('./plugins/todos')
], (err) => {
  if (err) {
    throw err;
  }
});

module.exports = server;
