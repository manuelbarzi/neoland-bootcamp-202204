const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '24h'}) // enviamos payload con el texto
    // el token proteje al servidor
    
    return token
}

module.exports = generateToken