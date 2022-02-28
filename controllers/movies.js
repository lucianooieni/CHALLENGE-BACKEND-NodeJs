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

movieRouter.post('/', (request, response) => {
  const { image, title, creationDate, rating } = request.body
  Movie.create({ image, title, creationDate, rating })
    .then(res => response.json(res))
})

movieRouter.put('/:id', async (request, response) => {
  try {
    const { image, title, creationDate, rating } = request.body
    const updatedMovie = await Movie.update(
      { image, title, creationDate, rating },
      {
        where: {
          id: request.params.id
        }
      }
    )
    console.log('updatedCharacter', updatedMovie) // [ 1 ]
    response.json(updatedMovie)
  } catch (error) {
    response.json(error)
  }
})

movieRouter.delete('/:id', async (request, response) => {
  try {
    const deletedMovie = await Movie.destroy({
      where: {
        id: request.params.id
      }
    })
    response.json(deletedMovie)
  } catch (error) {
    response.json(error)
  }
})

module.exports = movieRouter

// image: DataTypes.STRING,
//   title: DataTypes.STRING,
//   creationDate: DataTypes.STRING,
//   rating: {
//     type: DataTypes.INTEGER,
//     validate: {
//       min: 1,
//       max: 5
//     }
//   }
