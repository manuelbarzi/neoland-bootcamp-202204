const { validateUsername, validatePassword, validateFunction } = require('../validators')
const { readdir, readFile } = require('fs')
const { AuthError } = require('../errors')

function authenticateUser(username, password, callback) {
    validateUsername(username)
    validatePassword(password)
    validateFunction(callback)

    readdir('../../db/users', (error, files) => {
        if (error) return callback(error)
        if (files.length === 0) return callback(error)

        let counter = 0, _error, token

        files.forEach(file => {
            readFile(`../../db/users${file}`, (error, data) => {
                
                if (!_error && !token) {
                    if (error) return callback(_error = error)

                    const body = JSON.parse(data)

                    if (body.username === username && body.password === password) {
                        token = '11s11s11s11s11s11s'
                        callback(null, token)

                        counter = files.length -1
                    }

                    counter++

                    if (counter === files.length && !token)
                        callback(new AuthError('wrong credentials'))
                }
            })
        })
    })
}

module.exports = authenticateUser