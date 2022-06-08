const { User } = require('../models')
const { ConflictError, AuthError } = require('../errors')
const { validateUsername, validatePassword, validateEmail, validateString } = require('../validators')


function createUser(adminId, name, username, password, role, nid, email, date) {
    debugger
    validateString(name)
    validateUsername(username)
    validatePassword(password)
    validateString(nid)
    validateEmail(email)
    validateString(role)
    return User.findOne({ id: adminId })
        .then(userfind => {
            if (userfind.role != 'admin')
                throw new AuthError(`${username} conctat for you Manager`)
            return User.create({ name, username, password, role, nid, email, date })




        })
        .catch(error => {
            if (error.code = 11000)
                throw new ConflictError(`user with username ${username} already exists`)
            throw error
        })




}

module.exports = createUser