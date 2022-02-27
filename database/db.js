const { Sequelize } = require('sequelize')
const { dbconfig } = require('./dbconfig')
console.log('dbconfig', dbconfig.database)

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

module.exports = sequelize
