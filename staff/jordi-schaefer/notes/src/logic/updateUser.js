const { User } = require('../models')
const { NotFoundError } = require('../errors')
const { validateObjectId, validateNumber, validateStringNotEmptyOrBlank, validateString } = require('../validators')


function updateUser(userId, name, age, email, phone) {
    validateObjectId(userId)
    validateStringNotEmptyOrBlank(name, 'name')
    if (age != null) validateNumber(age, 'age')
    if (email != null) validateString(email, 'email')
    if (phone != null) validateString(phone, 'phone')


    return User.updateOne({ _id: userId }, { $set: { name, age, email, phone }})
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

module.exports = updateUser