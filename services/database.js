'use strict';

const nconf     = require('nconf');
const Sequelize = require('sequelize');

module.exports = {

  init(){
    const { database, username, password } = nconf.get('Database');
    const connection  = nconf.get('Database:connection');

    this.connection = new Sequelize(
      database,
      username,
      password,
      connection
    );
  }
};
