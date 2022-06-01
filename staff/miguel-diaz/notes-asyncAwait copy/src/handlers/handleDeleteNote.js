const {deleteNote} = require('../logic')
const {verifyToken, handleErrorsAndRespond} = require('./helpers')

module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)
        const { body: { noteId } } = req

        deleteNote(userId, noteId)
            .then(noteId => res.status(204).send(noteId))
            .catch(error => {handleErrorsAndRespond(error, res)})
    } catch (error) {
        handleErrorsAndRespond
    }
}