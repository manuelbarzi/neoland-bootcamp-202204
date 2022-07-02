const { Incidence, Comment } = require('../models')
const { ConflictError } = require('../errors')
// const { validateStringNotEmptyOrBlank, validateUsername, validatePassword } = require('../validators')

function createIncidence(latitude, longitude, description, user) {
    // validateStringNotEmptyOrBlank(name, 'name')
    // validateUsername(username)
    // validatePassword(password)
    const date = Date.now()

    return Incidence.create({latitude, longitude, description, date, user})
        .then((incidence) => {
            return Comment.create({ incidence: incidence._id, message: 'Need help', date})
        })
        .catch(error => {

            throw error
        })
}

module.exports = createIncidence