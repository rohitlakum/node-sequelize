const ENV = require('../config/env')

module.exports = {
  "development": {
    "username": ENV.DB_USERNAME,
    "password": ENV.DB_PASSWORD,
    "database": ENV.DATABASE_NAME,
    "host": ENV.DB_HOST,
    "dialect": "mysql",
    // "logging": ENV.NODE_ENV === 'development' ? console.log : false
    "logging": false
  }
}