// const HANDLE_ERRORS = {
//   SequelizeValidationError: {
//     isEmail: (response, message) => response.status(400).send({ error: message }),
//     len: (response, message) => response.status(400).send({ error: message }),

//   },
//   SequelizeUniqueConstraintError: (response, message) =>
//   defaultError: response => response.status(500).end()
// }

const HANDLE_ERRORS = {
  SequelizeValidationError: (response, message) => response.status(400).send({ error: message }),
  SequelizeUniqueConstraintError: (response, message) => response.status(401).send({ error: message }),
  defaultError: response => response.status(500).end()
}

module.exports = (error, request, response, next) => {
  console.log('entra en el manejador de errores')
  const handler = HANDLE_ERRORS[error.name] || HANDLE_ERRORS.defaultError
  handler(response, error.errors[0].message)
  response.json(error)
  next(error)
}
