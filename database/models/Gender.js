const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class Gender extends Model {}

Gender.init({
  name: DataTypes.STRING,
  image: DataTypes.STRING
}, {
  sequelize, modelName: 'gender'
})

module.exports = Gender
