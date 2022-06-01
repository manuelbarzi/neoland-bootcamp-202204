const { retrieveNote, createNote, editNote, deleteNote, createWithoutDelete } = require('.') // index.js

createNote({
    title: 'mi primera nota',
    description: 'esta es mi primera nota'
})

// retrieveNote()

const noteEdited = {title: 'soy la nuevísima nota', description: 'soy la descripción de la nueva nota'}

const secondNote = {title: 'soy la segunda nota', description: 'soy la descripción de la segunda nota'}

createWithoutDelete(secondNote)

// editNote(noteEdited)

// deleteNote()