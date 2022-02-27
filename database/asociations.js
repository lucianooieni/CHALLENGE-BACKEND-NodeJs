const Character = require('./models/Character')
const Movie = require('./models/Movie')
const Gender = require('./models/Gender')

Character.belongsToMany(Movie, { through: 'character_movie', timestamps: false })
Movie.belongsToMany(Character, { through: 'character_movie', timestamps: false })

Gender.belongsToMany(Movie, { through: 'gender_movie' })
Movie.belongsToMany(Gender, { through: 'gender_movie' })
