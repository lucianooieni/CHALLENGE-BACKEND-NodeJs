const express = require('express')
const movieRouter = express.Router()
const Character = require('../database/models/Character')
const Movie = require('../database/models/Movie')

movieRouter.get('/', (request, response) => {
  Movie.findAll({
    attributes: ['image', 'title', 'creationDate']
  })
    .then(movies => response.json(movies))
})

movieRouter.get('/details', (request, response) => {
  Movie.findAll({
    include: {
      model: Character
    }
  })
    .then(movies => response.json(movies))
})

module.exports = movieRouter
