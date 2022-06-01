const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, 'el secreto')

    return token
}

module.exports = generateToken