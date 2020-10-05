// const knex = require('knex');
// const configuration = require('../../knexfile');

// const connection = knex(configuration.production);

// module.exports = connection;

const dbConfigObj = require('../../knexfile')

// .....

const app = express()

let dbConnectionConfig = dbConfigObj.production

const appDb = connectToDb(dbConnectionConfig)
Model.knex(appDb)