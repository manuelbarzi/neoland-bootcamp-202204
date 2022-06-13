const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateEmail, validateString, validateUsername, validatePassword, validateObjectId } = require('../validators')

function updateUser(adminId, userId, name, username, password, role, nid, email, date) {
    validateObjectId(adminId)
    validateObjectId(userId)
    if (name) validateString(name)
    if (username) validateUsername(username)
    if (password) validatePassword(password)
    if (nid) validateString(nid)
    if (email) validateEmail(email)
    if (role) validateString(role)
    debugger

    return User.findOne({ id: adminId })
        .then(userfind => {
            if (userfind.role != 'admin')
                throw new AuthError(`${username} conctat for you Manager`)
            return User.updateOne({ _id: userId }, { $set: { name, username, password, role, nid, email, date } })
        })
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${name} does not exist`)
        })
}

module.exports = updateUser