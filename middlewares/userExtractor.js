const jwt = require('jsonwebtoken')

const getToken = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.split(' ')[1]
  }
  return null
}

module.exports = (request, response, next) => {
  console.log(request.headers)
  const token = getToken(request)
  console.log('token: ', token)
  jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
    if (error) {
      console.log('error: ', error)
      response.status(401).json({ error: 'token missing or invalid' })
    } else {
      request.user = decodedToken
      next()
    }
  })
}
