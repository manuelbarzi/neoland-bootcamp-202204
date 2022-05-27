const { expect } = require('chai')
const { connect, Types: { ObjectId }, disconnect } = require('mongoose')
const { User, Note } = require('../models')
const deleteNote = require('./deleteNote')
const { NotFoundError } = require('../errors')

describe('deleteNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    describe('on existing users and notes', () => {
        let arrayOfNotes = [], usersArray = []

        let textArray = [
            'soy la nota1',
            'soy la nota2',
            'soy la nota3'
        ]

        beforeEach(() => {
            let counter = usersArray.length
                    for (let i = 0; i < counter; i++) {
                        usersArray.pop()
                    }

            usersArray.push(
                { name: 'abdo', username: 'soyuser', password: '321321321' },
                { name: 'abdo12321', username: 'NUEVO', password: '321321321' }
            )

            let usersPromises = usersArray.map(user => {
                return User.create(user)
            })
            return Promise.all(usersPromises)
                .then(users => {

                    let counter = usersArray.length
                    for (let i = 0; i < counter; i++) {
                        usersArray.pop()
                    }

                    users.forEach(user => usersArray.push(user))
                })
                .then(() => {
                    let notesPromises = textArray.map(text => {
                        return Note.create({ user: usersArray[0].id, text: text })
                    })
                    return Promise.all(notesPromises)
                })
                .then(notes => {
                    notes.forEach(note => arrayOfNotes.push(note))
                })
        })

        it('succeeds on correct user id an note id', () => {
            return deleteNote(arrayOfNotes[0].id, usersArray[0].id)
                .then(result => {
                    expect(result).to.be.undefined
                    
                    return Note.findById(arrayOfNotes[0].id)
                })
                .then(result => expect(result).to.be.null)
        })

    })

    afterEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    after(() => disconnect())
})