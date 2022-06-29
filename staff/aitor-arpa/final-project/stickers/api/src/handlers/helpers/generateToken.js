const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, 'el secreto', {expiresIn: '1h'})

    return token
}

module.exports = generateToken