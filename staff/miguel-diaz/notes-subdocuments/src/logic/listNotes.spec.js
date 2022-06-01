const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const listNotes = require('./listNotes')
const { expect } = require('chai')

describe('listNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })

            return user.save()

            // return User.create({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
        })
        // .then(_user => user = _user)

        describe('when user already has notes', () => {
            let note1, note2, note3, allNotes

            beforeEach(() => {
                note1 = new Note({ user: user.id, text: 'note 1' }, {read: 'primary'})
                note2 = new Note({ user: user.id, text: 'note 2' }, {read: 'secondary'})
                note3 = new Note({ user: user.id, text: 'note 3' }, {read: 'nearest'})

                return Promise.all([note1.save(), note2.save(), note3.save()])
                    .then(notes => allNotes = notes)
            })

            it('succeeds on correct user data', () =>
                listNotes(user.id)
                    .then(notes => {
                        expect(notes).to.be.instanceOf(Array)

                        expect(notes).to.have.lengthOf(3)

                        notes.forEach(note => {
                            const found = allNotes.some(_note => {
                                return _note.id === note.id && _note.text === note.text
                            })

                            expect(found).to.be.true
                        })
                    })
            )
        })

        describe('when user has no notes', () => {
            it('succeeds on correct user data', () =>
                listNotes(user.id)
                    .then(notes => {
                        expect(notes).to.be.instanceOf(Array)

                        expect(notes).to.have.lengthOf(0)
                    })
            )
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return listNotes(wrongId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return listNotes(unexistingUserId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
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