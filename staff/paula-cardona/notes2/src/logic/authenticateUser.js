const { validateUsername, validatePassword, validateFunction } = require('../validators')
const { readdir, readFile } = require('fs')
const { AuthError } = require('../errors')

function authenticateUser(username, password, callback) {
    validateUsername(username)
    validatePassword(password)
    validateFunction(callback, 'callback')
    
    readdir('./db/users', (error, files) => {
        if (error) return callback(error)

        let count = 0, _error, userId

        if (files.length)
            files.forEach(file => { //en foreach el primer parametro q le das es como le vas a llamar a cada uno de ellos y puede ser lo que quieras
                readFile(`./db/users/${file}`, 'utf8', (error, json) => { //por cada elemento del files que yo le he llamado file, que me lo lea
                    if (!_error && !userId) {
                        if (error) return callback(_error = error)
                        
                        count++

                        const user = JSON.parse(json)

                        if (user.username === username && user.password === password) {
                            userId = file.substring(0, file.indexOf('.')) // ex: 1234qfasdfhas2fas.json

                            callback(null, userId)

                            return
                        }
                            
                        if (count === files.length) {
                            callback(new AuthError('wrong credentials'))
                        }
                    }
                })
            })
        else callback(new AuthError('wrong credentials'))
    })
}

module.exports = authenticateUser