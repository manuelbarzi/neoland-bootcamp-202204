function deleteNote(token, noteId, callback) {
    
    // declaro un constructor de una peticion a servidor
    const xhr = new XMLHttpRequest

    // eventlistener en caso de carga 'load'
    xhr.addEventListener('load', event => {
        // me guardo es satatus del svent target
        const status = event.target.status
        
        if (status === 204) // si es 204 correcto, sin respuesta
            callback(null)
        else if (status >= 400 && status < 500) { // 400-500 errores de cliente
            const json = event.target.responseText // me guardo el texto de error
            const data = JSON.parse(json) // lo convierto de jason a string

            callback(new Error(data.error)) // lo envio como mensaje de error
        } else {
            callback(new Error('server error')) // sino sera un error de servidor
        }
    })


    retrieveNotes(token, (error, notes) => {
        if (error) {
            alert(error.message)
            return
        }

        // busco en incide donde esta la nota con el id que quiero borrar
        // y con el splice lo elimino
        const index = db.notes.findIndex(note => note.id === noteId)
        notes.splice(index, 1)

        // abro la api en modpo POST
        xhr.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    
        // le indico que le envio un jason
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        xhr.setRequestHeader('Content-Type', 'application/json')
        
        const data = { notes } // cojo los datos que me llegan para el registro
        const json = JSON.stringify(data)   // lo convierto a jason
    
        xhr.send(json) // se los envio al xhr (el constructor que abro al principio)
    })
}