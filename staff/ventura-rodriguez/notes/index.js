// CRUD
// const obj = require("./utils")
// const { randomId } = obj


const fs = require('fs')

const { randomId } = require('utils') // Importa todo lo que haya en el index de la carpeta utils


function createNote(note) {

    const { title, description } = note
    const id = randomId()
    const newNote = {id, title, description}

    fs.writeFile('./db/note.json', JSON.stringify(newNote, null, 4), function(error) {
        if (error) console.error(error)

        console.log('Note created')
    })

}

function retrieveNote() {
    debugger
    fs.readFile('./db/note.json', function(error, data) {
        if (error) console.error(error)

        const note = JSON.parse(data)
        console.log(note)

    })

}

module.exports = {
    createNote,
    retrieveNote
}