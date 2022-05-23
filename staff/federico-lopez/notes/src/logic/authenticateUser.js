const { validateUsername, validatePassword, validateFunction } = require('../validators')
const { readdir, readFile } = require('fs')
const { AuthError } = require('../errors')

function authenticateUser(username, password, callback) {
    validateUsername(username)
    validatePassword(password)
    validateFunction(callback)

    readdir('./db/users', (error, files) => {
        if (error) return callback(error)
        if (files.length === 0) return callback(new AuthError('wrong credentials'))

        let counter = 0, _error, userId

        files.forEach(file => {
            readFile(`./db/users/${file}`, (error, data) => {
                debugger
                if (!_error && !userId) {
                    if (error) return callback(_error = error)

                    const body = JSON.parse(data)

                    if (body.username === username && body.password === password) {
                        userId = file.substring(0, file.lastIndexOf('.'))
                        return callback(null, userId)  
                    }

                    counter++

                    if (counter === files.length && !userId)
                        callback(new AuthError('wrong credentials'))
                }
            })
        })
    })
}

module.exports = authenticateUser