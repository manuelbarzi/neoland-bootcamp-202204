const { expect } = require('chai')
const { connect, Types: { ObjectId }, disconnect } = require('mongoose')
const { User, Note } = require('../models')
const listNotes = require('./listNotes')
const { NotFoundError } = require('../errors')

describe('listNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    describe('on existing users and notes', () => {
        let user1, user2, arrayOfNotes = []

        const textArray = [
            'soy la nota1',
            'soy la nota2',
            'soy la nota3'
        ]

        beforeEach(() => {
            return User.create({ name: 'abdo', username: 'soyuser', password: '321321321' })
                .then(user => {
                    user1 = user
                    return User.create({ name: 'abdo12321', username: 'NUEVO', password: '321321321' })
                })
                .then(user => {
                    user2 = user
                })
                .then(() => {
                    const notesPromises = textArray.map(text => {
                        return Note.create({ user: user1.id, text: text })
                    })
                    return Promise.all(notesPromises)
                })
                .then(notes => {
                    for (let i = 0; i < notes.length; i++) {
                        arrayOfNotes[i] = notes[i]
                    }
                })

            // const usersArray = [
            //     { name: 'abdo', username: 'soyuser', password: '321321321' },
            //     { name: 'abdo12321', username: 'NUEVO', password: '321321321' }
            // ]
            // return User.create({ name: 'abdo', username: 'soyuser', password: '321321321' })
            //     .then(user => {
            //         user1 = user
            //         return User.create({ name: 'abdo12321', username: 'NUEVO', password: '321321321' })
            //     })
            //     .then(user => {
            //         user2 = user
            //         return Note.create({ user: user1.id, text: 'soy la nota1' })
            //     })
            //     .then(note => {
            //         note1 = note
            //         return Note.create({ user: user1.id, text: 'soy la nota2' })
            //     })
            //     .then(note => {
            //         note2 = note
            //         return Note.create({ user: user1.id, text: 'soy la nota2' })
            //     })
            //     .then(note => {
            //         note3 = note
            //     })

            // user1 = new User({ name: 'abdo', username: 'soyuser', password: '321321321' })
            // return user1.save()
            //     .then(() => {
            //         user2 = new User({ name: 'abdo12321', username: 'NUEVO', password: '321321321' })
            //         return user2.save()
            //     })
            //     .then(() => {
            //         note1 = new Note({ user: user1.id, text: 'soy la nota1' })
            //         return note1.save()
            //     })
            //     .then(() => {
            //         note2 = new Note({ user: user1.id, text: 'soy la nota2' })
            //         return note2.save()
            //     })
            //     .then(() => {
            //         note3 = new Note({ user: user1.id, text: 'soy la nota3' })
            //         return note3.save()
            //     })
        })

        it('succeeds on correct userid and existing notes', () =>
            listNotes(user1.id)
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
            return listNotes(user2.id)
                .then(result => {
                    expect(result).to.be.instanceOf(Array)
                    expect(result.length).to.equal(0)
                })
        })
    })

    afterEach(() => Promise.all([Note.deleteMany(), User.deleteMany()]))

    after(() => disconnect())
})