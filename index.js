require('dotenv').config()
const express = require('express')
const app = express()
const sequelize = require('./database/db')
require('./database/asociations')
const characterRouter = require('./controllers/characters')

app.use(express.json())

app.get('/', (request, response) => {
  response
    .status(200)
    .send('<h1>CHALLENGE BACKEND - NodeJs</h1>')
})

app.use('/characters', characterRouter)

app.use((request, response) => {
  response
    .status(404)
    .send({ error: 'unknown endpoint' })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)

  sequelize
    .sync({ force: true })
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error))

  // sequelize
  //   .authenticate()
  //   .then(() => console.log('Connection has been established successfully.'))
  //   .catch(error => console.error('Unable to connect to the database:', error))
})
