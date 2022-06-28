const { authenticateUser } = require('../logic')
const { generateToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const { body: { username, password } } = req //como api te pido del body el username i la password

        authenticateUser(username, password)
            .then(userId => {
                 const token = generateToken(userId) //con el userId genero la función de jsonwebtoken para crear un token

                 res.status(200).json({token}) //si se ha creado correctamente status200 y envio el token en formato json
            })
            .catch (error => {
                handleErrorsAndRespond(error, res)
            })
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}