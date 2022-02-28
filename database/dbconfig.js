module.exports = {

  // database configurarion
  dbconfig: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    host: process.env.HOST || '127.0.0.1',
    database: process.env.DATABASE
  }
}
