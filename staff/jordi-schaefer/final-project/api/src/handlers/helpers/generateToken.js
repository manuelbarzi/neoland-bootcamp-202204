const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, process.env.JWT_SECRET) // enviamos payload con el texto         , { expiresIn: '24h'}
    // el token proteje al servidor
    
    return token
}

module.exports = generateToken