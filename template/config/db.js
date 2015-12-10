'use strict';
/**
 * db config
 * @type {Object}
 */
module.exports = {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: '',
      user: '',
      pwd: '',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};