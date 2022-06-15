const { retrievePublicNotes } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
    try {  
        const userId = verifyToken(req)

        retrivePublicNotes(userId)
            .then(notes => res.status(200).json({notes}))  // devuelvo estatus ok y el token
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}