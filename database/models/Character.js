const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class Character extends Model {}

Character.init({
  image: DataTypes.STRING,
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  weight: DataTypes.DOUBLE,
  history: DataTypes.STRING
}, {
  sequelize,
  modelName: 'character',
  timestamps: false
})

module.exports = Character
