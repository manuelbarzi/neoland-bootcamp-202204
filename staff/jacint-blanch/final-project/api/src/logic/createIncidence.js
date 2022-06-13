const { Incidence } = require('../models')
const { ConflictError } = require('../errors')
// const { validateStringNotEmptyOrBlank, validateUsername, validatePassword } = require('../validators')

function createIncidence(latitude, longitude, description) {
    // validateStringNotEmptyOrBlank(name, 'name')
    // validateUsername(username)
    // validatePassword(password)
    const date = Date.now()

    return Incidence.create({latitude, longitude, description, date})
        .then(() => { })
        .catch(error => {
            if (error.code = 11000)
                throw new ConflictError(` user with username ${username} already exists`)
            
            throw error
        })
}

module.exports = createIncidence