const { User } = require('../models')
const { NotFoundError } = require('../errors')
const {  validateEmail, validateString,validateUsername } = require('../validators')

function updateUser(adminId, userId, name, username, password, role, DNI, email,date) {
      
    if (name) validateString(name)
    if (username)validateUsername(username)
    if (password)validatePassword(password)
    if (nid)validateString(nid)
    if (email)validateEmail(email)
    if (role)validateString(role)
    // TODO validate adminId is an admin user
debugger
    return User.updateOne({ _id: userId }, { $set: { name, username, password, role, DNI, email,date } })
    
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser