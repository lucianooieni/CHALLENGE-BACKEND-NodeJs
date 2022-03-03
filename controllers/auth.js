const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../database/models/User')

const signIn = async (request, response) => {
  try {
    const { email, password } = request.body

    const user = await User.findOne({
      where: {
        email
      }
    })
    if (!user) {
      response.status(401).json({
        error: 'invalid username or password'
      })
    } else {
      if (await bcrypt.compare(password, user.password)) {
        // create token
        const token = jwt.sign(
          { user },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRES }
        )

        response.json({
          user,
          token
        })
      } else {
        response.status(401).json({
          error: 'invalid username or password'
        })
      }
    }
  } catch (error) {
    response.status(500).json(error)
  }
}

const signUp = async (request, response, next) => {
  try {
    const { name, email, password } = request.body

    // encrypt password
    const passwordHash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT_ROUND))

    const user = await User.create({
      name,
      email,
      password: passwordHash
    })

    response.json(user)
  } catch (error) {
    // response.status(401).json(error)
    next(error)
  }
}

module.exports = { signIn, signUp }
