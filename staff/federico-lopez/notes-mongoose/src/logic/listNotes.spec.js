const { expect } = require('chai')
const { connect, Types: { ObjectId }, disconnect } = require('mongoose')
const { User, Note } = require('../models')
const listNotes = require('./listNotes')
const { NotFoundError } = require('../errors')

describe('listNotes', () => {
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

        it('succeeds on correct userid and existing notes', () =>
            listNotes(usersArray[0].id)
                .then(result => {
                    expect(result).to.be.instanceOf(Array)
                    expect(result.length).to.equal(3)

                    for (let i = 0; i < result.length; i++) {
                        expect(result[i].text).to.equal(arrayOfNotes[i].text)
                        expect(result[i].id).to.equal(arrayOfNotes[i].id.toString())
                        expect(result[i].user).to.equal(arrayOfNotes[i].user.toString())
                    }
                })
        )

        it('fails on wrong user id', () => {
            const wrongUserId = new ObjectId().toString()

            return listNotes(wrongUserId)
                .then(() => {
                    debugger
                    throw new Error('it should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongUserId} dos not exist`)
                })
        })

        it('succeed on correct user id that has no notes', () => {
            return listNotes(usersArray[1].id)
                .then(result => {
                    expect(result).to.be.instanceOf(Array)
                    expect(result.length).to.equal(0)
                })
        })
    })

    afterEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    after(() => disconnect())
})