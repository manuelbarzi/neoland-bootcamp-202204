const { sign } = require('jsonwebtoken') //extraigo de jsonwebtoken el crear un token

//para generar un token a partir de su payload en la que extraemos su sub:userId, la firma i el secreto. con el mismo jsonwebtoken lo convierte todo a json

function generateToken(userId) {
    const token = sign({ sub: userId }, process.env.JWT_SECRET) //le paso

    return token
}

module.exports = generateToken