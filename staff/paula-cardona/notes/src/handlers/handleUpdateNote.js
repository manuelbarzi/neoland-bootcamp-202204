const { updateNote } = require('../logic')
const { verifyToken, handleErrorsAndRespond } = require('./helpers')

module.exports= (req, res) => { //cuando update solo una nota, en la ruta pongo el noteid de esa nota para que me lleve solo a esa nota
                
    try {
        const userId = verifyToken(req)

        const { params: {noteId}, body: { text } } = req //le pasamos el body con newName,age,email,phone (tienen que coincidir escritos con los parametros de la funcion, ya que son los que nos llega del navegador y los que tienen que pasar la logica
                                                        //cuando quieres cambiar algo en concreto, tienes que espcificarlo en el path, en el body es lo que queremos cambiar
        updateNote(userId, noteId, text )
            .then(() => res.status(204).send()) //no le envio cuerpo solo el status por eso send() sin json 
            .catch (error => handleErrorsAndRespond(error, res))
            
    } catch (error) {
        handleErrorsAndRespond(error, res)
    }

    
}