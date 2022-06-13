const { verify } = require('jsonwebtoken')
const { AuthError } = require('../../errors')

/**
* Parses JWT from Express Request, verifies it (against the secret) and returns the payload.
* 
* @param {Request} req The HTTP request (Express server) req=obj
* 
* @retuns {String} userId The user id
*/

//esta función la hago para ahorrarme poner estas lineas en mi index

function verifyToken(req) { 
    const { headers: { authorization } } = req //del objeto de request, extraigo la propiedad de headers y su keu authorization
    debugger
    if (!authorization)
        throw new AuthError('no authorization header received (with token)')

    const[, token] = authorization.split(' ') // del value de la key authorization que a través del método split me devuelve un array, me quedo solo con el token, obvio el Beared
    
    const { sub: userId } = verify(token, process.env.JWT_SECRET) //verifica si el token es válido con el token y el secreto. te devuelve el payload con su propiedad sub:userId 

    return userId //te extrae el userId

}
module.exports = verifyToken