function createNote(userId, text, callback) {

    // -- que hace la funcion? 
    // crear una nota en db/notes
    // con nombre de archivo, ID de la nota
    // dentro de la nota tiene json con:
    // · id del usuario
    // · texto
    // · fecha ( se genera al crear New  note() )


    // -- compruebo que el userId de la nota que voy a crear, existe en mis datos de users
    // readdir para leer los archivos que tengo en users
    // me devuelve un array
    // hacer un forEach
    // mirar para cada arcivo si mi userId (que me llega en parametros)
    // es igual a al titulo del archivo users, ya que el titulo es el id de cada usuario
    // para mirarlo cojo el nombre del file, y le quito el .json
    // entonces ya puedo hacer el if igualando
    // si se cumple el if: hago el seiguente paso de guardar la nota
    // si no se cumple: envio error


    // -- guardar la nota
    // genero un ID nuevo para la nota
    // new Note() creo un new note con los valores que quiero guardar
    // paso a json el newNote
    // writeFile()  pasandole direccion(nombre) y json, mas algunas cosas menos importantes
    // cuando ha ido todo bien ballback(null, y le paso el id de la nota)

}