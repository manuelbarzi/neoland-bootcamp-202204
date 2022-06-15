const { updateUser } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { body: {name, username, password, role, nid, email,date} } = req

        updateUser(userId, name, username, password,role, email, nid, direccion,date)
            .then(() => res.status(204).send())  
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}