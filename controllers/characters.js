const express = require('express')
const characterRouter = express.Router()
const Character = require('../database/models/Character')

characterRouter.get('/', async (request, response) => {
  const users = await Character.findAll({
    attributes: ['name', 'image']
  })
  response.json(users)
})

module.exports = characterRouter
