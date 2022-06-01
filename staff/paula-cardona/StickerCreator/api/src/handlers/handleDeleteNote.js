const { deleteNote } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')


module.exports = (req, res) => {
                
    try {
        const userId = verifyToken(req)

        const { params: {noteId}} = req //le pasamos el body con newName,age,email,phone (tienen que coincidir escritos con los parametros de la funcion, ya que son los que nos llega del navegador y los que tienen que pasar la logica

        deleteNote(userId, noteId)
            .then(() => res.status(204).send()) //no le envio cuerpo solo el status por eso send() sin json 
            .catch (error => handleErrorsAndRespond(error, res) )
    } catch (error) {
        handleErrorsAndRespond(error, res)
        
    }

    
}