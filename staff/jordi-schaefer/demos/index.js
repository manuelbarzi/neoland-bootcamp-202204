const fs = require('fs') // nos traemos el modulo fs (file-system) que no hace falta instalar, viene con node
const { randomId } = require('./utils') // importa todo lo que haya en el index de la carpeta utils


function createNote(note) {

    const { title, description } = note
    const id = randomId()
    const newNote = {id, title, description}

    // nombre del fichero, string o contenido para añadir, callback
    // la callback se ejecuta una vez se haya leido el documento
    // el nuevo archivo lo meto en la carpeta db
    // (newNote, null, 4) null seria el replacer, 4 es la indexacion ¿?
    fs.writeFile('./db/note.json', JSON.stringify(newNote, null, 4), function(error) {  // la callback espera un parametro error
        if (error) console.error(error)

        console.log('Note created')
    })
}


function retrieveNote() {

    fs.readFile('./db/note.json', function(error, data) {
        if (error) console.error(error)

        const note = JSON.parse(data)
        console.log(note)
    })
}


function updateNote(note) {

    const { id, title, description } = note
    debugger
    fs.readFile('./db/note.json', function(error, data) {
        if (error) console.error(error)

        const notes = JSON.parse(data)
        debugger
        const index = notes.findIndex((note) => note.id === id)
        
        consolge.log(notes[index])
    })
}


function deleteNote() {
    fs.writeFile('./db/note.json', '', function(error) {
        if (error) console.error(error)

        console.log('Note deleted')
    })
}




module.exports = {
    createNote,
    retrieveNote,
    deleteNote,
    updateNote
}