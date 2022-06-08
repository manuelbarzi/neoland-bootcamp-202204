const { updateUser } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('../../../stickers/api/src/handlers/helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: {name, username, password, rol, DNI, email,date} } = req

        updateUser(userId, name, username, password, email, DNI, direccion)
            .then(() => res.status(204).send())  
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}