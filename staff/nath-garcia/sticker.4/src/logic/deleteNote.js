function deleteNote(username, noteId, callback){
    const userExists = db.users.some(user=>user.username === username)

    if(!userExists){
        callback(new Error(`username "${username}" does not exist`))

        return
    }

    const index = db.notes.findIndex(note=> note.id === noteId)

    if (index < 0) {
        callback(new Error(`note with id "${noteId}" does not exist`))

        return
    }

    const note = db.notes[index]

    if (note.username !== username) {
        callback(new Error(`user "${username}" does not own note with id "${noteId}"`))

        return
}

db.notes.splice(index, 1)

callback(null)
}

//consigna de Ventu:
// Qué le paso por parámetros?
// En la callback que le paso por parámetros a esa callback?

// primero tengo que llamar a v:get p:/users
// manejo errores de la llamada
// paso el json de la respuesta a a obj
// cojo la propiedad notes y le puseo la nota nueva
// hago otra llamada a p:/users con verbo patch
// a esta llamada solo le paso como body la note con el array con lo que había más la nueva
// manejo los errores