const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateEmail,validateObjectId, validatePassword } = require('../validators')

function updateUser(userId, name, password,email) {
    validateObjectId(userId)
    if (name !=null) validateStringNotEmptyOrBlank(name, 'name')
    if(password != null)validatePassword(password, 'password')
    if (email != null)  validateEmail(email, 'email')
  
    

    return User.updateOne({ _id: userId }, { $set: { name, password, email}})
        .then((result) => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser



