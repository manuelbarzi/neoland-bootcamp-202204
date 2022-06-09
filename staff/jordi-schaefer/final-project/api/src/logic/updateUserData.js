const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces ,validateStringNotEmptyOrBlank, validateEmail, validatePassword } = require('../validators')


function updateUserData(userId, name, password, email) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    if (name != null) validateStringNotEmptyOrBlank(name, 'name')
    if (password != null) validatePassword(password, 'password')
    if (email != null)  validateEmail(email, 'email')


    return User.updateOne({ _id: userId }, { $set: { name, password, email }})
        .then((result) => { // console.log(); debugger })  // este then captura la respuesta del user Id
        // pero no nos interesa recivir ni devolver nada
        // si quitas el then o lo dejas con solo parentesis vacios
        // te devuelve la respuesta

        // si nos dice que ha ido bien, devuelve TRUE pero no ha modificado nada
        // pork no lo ha encontrado
            if (result.matchedCount === 0) // miramos si no ha modificado
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUserData