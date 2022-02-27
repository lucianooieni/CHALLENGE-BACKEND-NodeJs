const express = require('express')
const characterRouter = express.Router()
const Character = require('../database/models/Character')
const Movie = require('../database/models/Movie')

characterRouter.get('/', async (request, response) => {
  const users = await Character.findAll({
    attributes: ['name', 'image']
  })
  response.json(users)
})

characterRouter.post('/', async (request, response) => {
  console.log('body: ', request.body)
  try {
    const { image, name, age, weight, history } = request.body
    const user = await Character.create({ image, name, age, weight, history })
    response.json(user)
  } catch (error) {
    response.json(error)
  }
})

characterRouter.put('/:id', async (request, response) => {
  try {
    const { image, name, age, weight, history } = request.body
    const updatedCharacter = await Character.update(
      { image, name, age, weight, history },
      {
        where: {
          id: request.params.id
        }
      }
    )
    console.log('updatedCharacter', updatedCharacter) // [ 1 ]
    response.json(updatedCharacter)
  } catch (error) {
    response.json(error)
  }
})

characterRouter.delete('/:id', async (request, response) => {
  try {
    const deletedCharacter = await Character.destroy({
      where: {
        id: request.params.id
      }
    })
    response.json(deletedCharacter)
  } catch (error) {
    response.json(error)
  }
})

characterRouter.get('/details', (request, response) => {
  Character.findAll({
    include: {
      model: Movie
    }
  }).then(res => response.json(res))
})

module.exports = characterRouter

// image: DataTypes.STRING,
// name: DataTypes.STRING,
// age: DataTypes.INTEGER,
// weight: DataTypes.DOUBLE,
// history: DataTypes.STRING
