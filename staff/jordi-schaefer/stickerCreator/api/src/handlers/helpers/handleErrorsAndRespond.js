const { ConflictError, FormatError, AuthError, NotFoundError } = require('../../errors')

module.exports = (error, res) => {
    let status = 500

    if (error instanceof TypeError || error instanceof FormatError || error instanceof RangeError)
        status = 400
    else if (error instanceof AuthError)
        status = 401
    else if (error instanceof NotFoundError)
        status = 404
    else if (error instanceof ConflictError)
        status = 409

    res.status(status).json({ error: error.message })// respondo con un status de error 
    // .json combina la funcion send y transformar a json
}