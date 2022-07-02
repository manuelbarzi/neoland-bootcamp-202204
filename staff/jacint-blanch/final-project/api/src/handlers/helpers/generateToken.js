const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, 'secret' , { expiresIn: '99h' })

    return token
}

module.exports = generateToken