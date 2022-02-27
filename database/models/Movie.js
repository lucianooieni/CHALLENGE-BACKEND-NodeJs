const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db')

class Movie extends Model {}

Movie.init({
  image: DataTypes.STRING,
  title: DataTypes.STRING,
  creationDate: DataTypes.DATE,
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
}, {
  sequelize, modelName: 'movie'
})

module.exports = Movie
