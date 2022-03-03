const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class Movie extends Model {}

Movie.init({
  image: DataTypes.STRING,
  title: DataTypes.STRING,
  creationDate: DataTypes.STRING,
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: {
        args: 1,
        msg: 'invalid range, number between 1 and 6'
      },
      max: {
        args: 6,
        msg: 'invalid range, number between 1 and 6'
      }
    }
  }
}, {
  sequelize,
  modelName: 'movie',
  timestamps: false
})

module.exports = Movie
