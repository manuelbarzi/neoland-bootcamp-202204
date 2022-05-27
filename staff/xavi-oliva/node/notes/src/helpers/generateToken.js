const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, 'pasamos cualquier frase como secreto')

    return token
}

module.exports = generateToken 