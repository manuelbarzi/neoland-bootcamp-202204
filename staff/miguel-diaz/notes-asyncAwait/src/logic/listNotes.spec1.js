const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const createNote = require('./createNote')
const { expect } = require('chai')
describe('listNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))
    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    describe('happy path', () => {
        let userId
        beforeEach(() => {
            return User.create({ name: 'Diego Armando', username: 'maradona', password: '123123123' })
                .then(user => {
                    // guardar ese id que me viene por result
                    userId = user.id
                    const textNotes = ['text1', 'text2', 'text3', 'text4', 'text5']
                    const notesPromises = textNotes.map(text => Note.create({
                        user: userId,
                        text: 'text'
                    }))
                    return Note.create({ user: userId, text: 'Hola mundo' })
                })
                .then(() => {
                    return Note.create({ user: userId, text: 'Hola mundo' })
                })
        })
        it("", () => { })
    })
    afterEach(() => { })
    after(() => disconnect())
})