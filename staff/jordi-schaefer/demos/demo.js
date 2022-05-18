const { retrieveNote, createNote, updateNote } = require('.') // index.js


/*
createNote({
    title: 'nota 1',
    description: 'mi primera nota'
})

retrieveNote()
*/

notes = [{id:1, tittle: 'edit', descriptio: 'does it work?'}, {id:2, tittle: 'edit', descriptio: 'second note'}]

updateNote(notes)