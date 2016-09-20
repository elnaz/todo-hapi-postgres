'use strict';

const Joi = require('joi');

const Controller = require('./controller');

exports.register = (server, options, next) => {

  server.route([{
    method: 'GET',
    path: '/',
    config: {
      handler: (request, reply) => {
        reply(Controller.list());
      }
    }
  }, {
    method: 'POST',
    path: '/',
    config: {
      handler: (request, reply) => {
        reply(Controller.create(request.payload));
      },
      validate: {
        payload: {
          title: Joi.string().required(),
          completed: Joi.boolean().optional(),
          order: Joi.number().integer().optional()
        }
      }
    }
  }, {
    method: 'DELETE',
    path: '/',
    config: {
      handler: (request, reply) => {
        reply(Controller.deleteAll());
      }
    }
  }, {
    method: 'GET',
    path: '/{id}',
    config: {
      handler: (request, reply) => {
        reply(Controller.retrieve(request.params.id));
      }
    }
  }, {
    method: 'PATCH',
    path: '/{id}',
    config: {
      handler: (request, reply) => {
        reply(Controller.update(request.params.id, request.payload));
      },
      validate: {
        payload: {
          title: Joi.string().optional(),
          completed: Joi.boolean().optional(),
          order: Joi.number().integer().optional()
        }
      }
    }
  }, {
    method: 'DELETE',
    path: '/{id}',
    config: {
      handler: (request, reply) => {
        reply(Controller.delete(request.params.id));
      }
    }
  }]);

  next();

};

exports.register.attributes = {
  name: 'todos'
};
