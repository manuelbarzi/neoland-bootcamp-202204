const { Incidence, Comment } = require('../models')
const { ConflictError } = require('../errors')
// const { validateStringNotEmptyOrBlank, validateUsername, validatePassword } = require('../validators')

function createComment(chat, incidence, user) {
    // validateStringNotEmptyOrBlank(name, 'name')
    // validateUsername(username)
    // validatePassword(password)
    const date = Date.now()

    return Comment.create({message: chat, date, incidence, user})
        .then(() => {
            return 'ok'
        })
        .catch(error => {

            throw error
        })
}

module.exports = createComment