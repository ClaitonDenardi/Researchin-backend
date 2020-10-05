const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.production);

module.exports = connection;
configuration = {
  production: {
    client: 'pg', connection: process.env.DATABASE_URL
  }
}
