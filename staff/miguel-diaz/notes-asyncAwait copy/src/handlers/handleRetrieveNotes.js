const {retrieveNote} = require('../logic')
const {handleErrorsAndRespond} = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        retrieveNote(userId)
            .then(noteId => res.status(200).json(noteId))
            .catch(error => {handleErrorsAndRespond})
    } catch (error) {
        handleErrorsAndRespond
    }
}