const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require("../models")
const { NotFoundError } = require('../errors')
const updateNote = require('./updateNote')
const { expect } = require('chai')

describe('updateNote', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => {
        let userId

        beforeEach(() => {
            return User.create({ name: 'Miguel', username: 'michelo', password: '123123123' })
                .then((user) => {
                    userId = user.id
                })
        })

        it('success with notes and correct credentials', () => {
            let noteId
            return Note.create({ user: userId, text: 'WHAT THE NOTE' })
                .then((result) => {
                    noteId = result.id

                    return updateNote(userId, noteId, 'PA CAMBIAR')
                })
                .then((result) => {
                    expect(result).to.be.undefined

                    return Note.findById(noteId)
                })
                .then((note) => {
                    expect(note.text).to.be.equal('PA CAMBIAR')
                })
        })

        it('fails with no notes', () => {
            const wrongId = new ObjectId().toString()

            return updateNote(userId, wrongId, 'PA EDITAR')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`note with id ${wrongId} does not exist`)
                })
        })

    })

    describe('when user does not exist', () => {

        it('fails with wrong user Id', () => {
            const wrongId = new ObjectId().toString()
            const userId = new ObjectId().toString()

            let noteId
            return Note.create({ user: userId, text: 'ESTA BAINA SE HA BORRAO LOCO' })
                .then((result) => {
                    noteId = result.id

                    return updateNote(wrongId, noteId, 'PA EDITAR')
                })
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })

    })


    afterEach(() => User.deleteMany())

    after(() => disconnect())

})