const { verify } = require('jsonwebtoken')

/**
 * Parses JWT from Express Request, verifies it (against the secret) and returns the payload.
 * 
 * @param {Request} req The HTTP request (Express server)
 * 
 * @retuns {String} userId -> the user id
 */
function verifyToken(req) {
    const { headers: { authorization } } = req

    const [, token] = authorization.split(' ')

    const { sub: userId } = verify(token, 'pasamos cualquier frase como secreto')

    return userId
}

module.exports = verifyToken 