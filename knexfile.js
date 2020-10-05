const prodConfig = Object.assign(
  {},
  this.development,
  { client: 'pg', connection: process.env.DATABASE_URL }
)

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  production: prodConfig
}
