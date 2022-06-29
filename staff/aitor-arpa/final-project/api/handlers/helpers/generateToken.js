const { sign } = require('jsonwebtoken')

function generateToken(userId, role) {
    const token = sign({ sub: userId, role }, 'el secreto', {expiresIn: '8h'})

    return token
}

module.exports = generateToken