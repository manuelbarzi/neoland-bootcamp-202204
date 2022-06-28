const { User, Note } = require ('../models')
const { NotFoundError } = require ('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')


function listNotes(userId) { // recibimos el user id al que les buscaremos sus notas 
    validateStringNotEmptyNoSpaces(userId, 'user id')

    // User.findOne({ _id: userId})
    return User.findById(userId) //por tema de seguridad tenemos que primero mirar si existe el usuario 
        .then((user) => {
            if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Note.find({ user: userId }).lean()    //lean() me trae el documento    
        })
        .then((notes)=>{ 
            notes.forEach(note=>{
                note.id=note._id.toString() //me guardo la propiedad id de la nota bien sin el_id para que nadie sepa que viene de mongoose
                delete note.__v
                delete note._id //ya tengo el note.id bien puesto
                delete note.user //el user lo elimino porque solo quiero que me devuelva la nota
            })
            
            return notes
        })
        
}


module.exports = listNotes