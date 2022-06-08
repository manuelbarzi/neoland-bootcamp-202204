const { retrievePublicNotes } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports = (req, res) => {
                
    try {
        const userId = verifyToken(req)

        retrievePublicNotes(userId)
            .then((noteId) => res.status(201).send({noteId})) //no le envio cuerpo solo el status por eso send() sin json 
            .catch (error => handleErrorsAndRespond(error, res))
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }

    
}