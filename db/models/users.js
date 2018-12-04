'use strict';

const Sequelize      = require('sequelize');
const path           = require('path');
const { connection } = require(path.join(process.env.PWD, '/services/database'));

module.exports = connection.define('users', {
  email: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {});
