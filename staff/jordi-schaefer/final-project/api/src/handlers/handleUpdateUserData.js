const { updateUserData } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: { name, password, email } } = req

        updateUserData(userId, name, password, email )
            .then(() => res.status(204).send())  // devuelvo estatus modificado ok
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}