import pgPromise from 'pg-promise'

const pgp = pgPromise()

const db = pgp({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
})

export default db
