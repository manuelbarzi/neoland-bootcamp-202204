const { User } = require('../models')
const { NotFoundError } = require('../errors')
const {  validateStringNotEmptyOrBlank, validateString,validateNumber } = require('../validators')

function updateUser(userId, name, age, email, phone) {
   
    if (name) validateStringNotEmptyOrBlank(name, 'name')
    if (age) validateNumber(age, 'age')
    if (email) validateString(email, 'email')
    if (phone) validateString(phone, 'phone')
debugger
    return User.updateOne({ _id: userId }, { $set: { name, age, email, phone } })
    // lo busco por el ide y modifico cono la variable set y las propiedades de dentro
        .then(result => {
            if (result.matchedCount === 0)
                throw new NotFoundError(`user with id ${userId} does not exist`)
        })
}

module.exports = updateUser