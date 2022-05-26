const { sign } = require('jsonwebtoken')

function generateToken(userId) {
    const token = sign({ sub: userId }, 'secretito que codifica') // enviamos payload con el texto
    // el token proteje al servidor
    
    return token
}

module.exports = generateToken