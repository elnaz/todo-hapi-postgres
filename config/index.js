'use strict';

const config =  {
  development: require('./development'),
  production: require('./production')
};

module.exports = config[process.env.NODE_ENV || 'development'];
