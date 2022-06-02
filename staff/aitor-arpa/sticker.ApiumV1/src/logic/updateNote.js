function updateNote ( username, noteId, text, callback) {
    const userExists = db.users.some(user => user.username === username)
    // declaro variable en la que busco si el nombre de usuario es = nombre de usuario en la base de datos
    if (!userExists) { // si no existe 
        callback(new Error(`username "${username}" does not exist`))
        // muestra un error 
        return // sale
    }
    const note = db.notes.find(note => note.id === noteId)
    // declaro variable ene la que busca en id de la nota que sea el mimso que nos 
    // llega como parametro
    if (!note) {  // si no nota no existe
        callback(new Error(`note with id "${noteId}"does not exist`))
        // muestra error
        return  // sal
    }

    if (note.username !== username) {  // si el nombre de usuario de la nota es diferente al quien la creo 
        callback(new Error (`user "${username}" does not own note with id "${noteId}"`))
        // envia errror     
        return
    }

    note.text = text // me guardo el texto de la nota en una variable 

    callback(null)  // devuele null ( a ido todo bien )
}