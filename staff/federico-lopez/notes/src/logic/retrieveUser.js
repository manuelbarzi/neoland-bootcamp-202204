const { validateStringNotEmptyNoSpaces, validateFunction } = require("../validators");
const { readFile } = require('fs');
const { NotFoundError } = require('../errors')

function retrieveUser(userId, callback) {
    validateStringNotEmptyNoSpaces(userId)
    validateFunction(callback)

    readFile(`./db/users/${userId}.json`, 'utf-8', (error, data) => {
        if (error) return callback(new NotFoundError('user does not exist'))

        const userRetrieved = JSON.parse(data)

        delete userRetrieved.password

        callback(null, userRetrieved)
    })
}

module.exports = retrieveUser