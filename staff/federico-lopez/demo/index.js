const fs = require('fs')
const { randomId } = require('./utils')


function createNote(note) {

    const { title, description } = note
    const id = randomId()
    const newNote = {id, title, description}

    fs.writeFile('./db/note.json', JSON.stringify(newNote, null, 4), function(error) {
        if (error) console.error(error)

        console.log('Note created')

        retrieveNote()
    })
}

function createWithoutDelete(note) {

    const {title, description} = note
    const id = randomId()
    newNote = { id, title, description }

    fs.appendFile('db/note.json', JSON.stringify(newNote), error => {
        if (error) return console.error(error)

        console.log('note is saved without delete anything')

        retrieveNote()
    })
}

function retrieveNote() {

    fs.readFile('./db/note.json', function(error, data) {
        if (error) console.error(error)

        const note = JSON.parse(data)
        console.log(note)
    })

}

function deleteNote(note) {
    fs.readFile('./db/note.json', (error, data) => {
        if (error) console.error(error)

        fs.writeFile('db/note.json', JSON.stringify(' '), (error) => {
            if (error) return console.error(error)

            console.log('note deleted!')

            retrieveNote()
        })
    })
}

function editNote(note) {
    fs.readFile('./db/note.json', function(error, data) {
        if (error) console.error(error)

        const noteSaved = JSON.parse(data)
        
        noteSaved.title = note.title
        noteSaved.description = note.description

        fs.writeFile('db/note.json', JSON.stringify(noteSaved), error => {
            if (error) return console.error(error)

            console.log('note edited!')

            retrieveNote()
        })

    })
}

module.exports = {
    createNote,
    retrieveNote,
    editNote,
    deleteNote,
    createWithoutDelete
}