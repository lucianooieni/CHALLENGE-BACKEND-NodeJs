const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class User extends Model {}

User.init({
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
})

module.exports = User
