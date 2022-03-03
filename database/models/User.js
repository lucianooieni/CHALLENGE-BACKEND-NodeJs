const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    validate: {
      len: {
        args: [3, 255],
        msg: 'name must be between 3 and 255 characters'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: 'email format invalid'
      }

    }
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
