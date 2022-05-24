const { User } = require('../models')
const { ConflictError } = require('../errors')
const { validateString } = require('../validators')
function createUser(name, username, password) {
    // TODO validate input args
    validateString(username) // lazará una excepcion throw

    return User.create({ name, username, password })
        .then(() => { }) 
        .catch(error => {
            if (error.code = 11000)
                throw new ConflictError(`user with username ${username} already exists`)
            
            throw error
        })
}

module.exports = createUser