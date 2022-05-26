const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const listNotes = require('./listNotes')
const { expect } = require('chai')

describe('listNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('Happy Path', () => {
        let userId

        beforeEach(() => {
            return User.create({
                name: 'lucatiel',
                username: 'lucataiel',
                password: '123123123'
            })
            .then(user => {
                userId = user.id
                const textNotes = [
                    'text1',
                    'text2',
                    'text3',
                    'text4',
                    'text5',
                ]
                const notesPromises = textNotes.map(text => Note.create({
                    user: userId,
                    text: 'este es mi texto'
                }))
                Promise.all(notesPromises)
            })
        })

        it('my test', () =>{
            return listNotes(userId)
            .then(notes => {
                expect(notes).to.be.intanceof(Array)
                expect(notes.lenght).to.be.equal(5)
                // TODO mirar si los textos corresppnden con las notas introducidas con un for
            })
        })
    })

    // afterEach(() => User.deleteMany())

    // after(() => disconnect())
})


// TTD Hacemos el spec
// conectamos a la BBDD y hacemos toda la config necesaria
// Borramos todos los documentos de notes (deleteMany)
// Borramos todos los documentos de users (deleteMany)
// Creamos un caso de uso concreto (happy path)
// creamos un usuario y guardamos el id para luego poder usarlo para siguientes pasos
// creamos varias notas para ese usuario (unas 5)
// LLamamos a la función logic correspondiente para comprobar su funcionamiento (happy path)
// Comprobamos si la respuesta es un array, tiene todas las notas introducidas (length) y
// comprobamos que son las notas que he metido en el aterior paso
// Borranmos todos los documentos de notes (deleteMany)
// Borranmos todos los documentos de users (deleteMany)