const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, 'soy fan de los beatles')

    return token
}

module.exports = generateToken