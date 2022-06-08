const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyOrBlank, validateStringNotEmptyNoSpaces, validateEmail, validatePositiveInteger, validateString, validatePassword } = require('../validators')

function updateUser(userId, name, password, age, email, phone) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (name != null)  validateStringNotEmptyOrBlank(name, 'name')
    if (age != null) validatePositiveInteger(age, 'age') //al no ser obligatorios ponemos que en el caso de que no sea null, la edad tiene que ser un numero integro
    if (email != null)  validateEmail(email, 'email')
    if (phone != null)  validateString(phone, 'phone')
    if (password != null) validatePassword (password, 'password')
      
    debugger
    return User.updateOne({ _id: userId }, { $set: { name, password, age, email, phone }}) //le digo a moongose por eso_id
        .then(result => {
            if (result.matchedCount === 0) //si no se ha modificado
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser