const { readdir, unlink } = require('fs')

function clearDbUsers(callback) {
    readdir(`../../db/users`, (error, files) => {
        if (error) return callback(error)

        let count = 0, _error

        if (files.length) {

            files.forEach(file => {
                unlink(`./db/users/${file}`, error => {
                    if (!_error) {
                        if (error) return callback(_error = error)

                        count++

                        if (count == files.length)
                            callback(null)
                    }
                })
            })
        }
    })
}

module.exports = clearDbUsers