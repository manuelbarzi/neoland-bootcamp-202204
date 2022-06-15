const { updateNote } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')
// req no tiene body asi que usamos el midelwar de body parse para despues destructurar y poder coger el contenido 
module.exports = (req, res) => {
    try {
        const userId = verifyToken(req)

        const { params: {noteId}, body: { text } } = req // : variable asignas el nombre :{ restructuras }
        
        updateNote(userId, noteId, text)
            .then(() => res.status(204).send())  // devuelvo estatus modificado ok
            .catch(error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }
}