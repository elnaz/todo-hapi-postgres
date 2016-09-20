'use strict';

const Util = require('util');

const Config = require('../config');
const Server = require('./server');

Server.start(() => {
  Util.log(`Server started on port ${Config.PORT}`);
});
