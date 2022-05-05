function retriveNotes( username, callback) {
    // variable para comprobar si el usuarioexixte comprueva en la bd.user
    const userExists = db.users.some(user.username === username)
    // si el Usuario no existe  entra en la callbak y envia el error y el mesaje expecificando que el nombere que a introducido no se encuentra ene la base de datos
    if(!userExists) {
        callback(new Error(`username "${username}" does not exist`))

        return

    }
    // declraro variable par ahacer un filtro en la bd de notas
    // y mostramos la solo las del usuario que nos llega.   
    const notes = db.notes.filter(note.username === username)

    callback(null,notes) // devuelve null y de segundo parametro el filtro

}