function retrieveNotes(username, callback) {  // recuperar
    
    const user = db.users.find(user => user.username === username)
    // find devuelve el valor del primero que cumple la funcion
    // si no encuentra nada devuelve undefined
    if (!user) {
        callback(new Error(`user with username ${username} not found`), null)
        return
    }

    const note = db.notes.filter(note => note.username === username)
    //crea un nuevo array con todos los elementos que cumplan la condicion deseada
    // si n hay notas o uruario el array estara vacio
/*     
    if (note.length===0) {
        callback(new Error(`no notes with username ${username}`))
        return
    }
*/
    callback(null, note)
}