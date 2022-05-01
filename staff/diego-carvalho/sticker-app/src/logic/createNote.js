/*en esta parte usamos el metodo some para averiguar si el user ya existe en la BD y no devolve una respuesta.
Si el user no esta, nos devolve un mensaje de error(username "username" does not exist)
 y si esta, nos permite entrar y aceder a las nota.
*/
function createNote(username, text, callback) {
    const userExists = users.some(user => user.username === username)

    if (!userExists) {
        callback(new Error(`username "${username}" does not exist`))

        return
    }

    const note = new Note(username, text)

    notes.push(note)

    callback(null)
}