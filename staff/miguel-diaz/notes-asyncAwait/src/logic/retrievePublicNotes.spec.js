const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require("../models")
const { NotFoundError } = require('../errors')
const retrievePublicNotes = require('./retrievePublicNotes')
const { expect } = require('chai')

describe('PublicNotes', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => {
        let userId

        beforeEach (()=> {
            return User.create({ name:'Miguel', username: 'miky', password: 'miguel123'}) 
                .then((user) => {
                    userId = user.id 
            })
        })
        afterEach(() => User.deleteMany())
        describe('when user already has notes',() => {
            let createdNotes

            beforeEach(() => {
                const texts = [['texto publico numero uno', 1],['texto publico numero dos', 1],['texto privado numero uno', 0],['texto privado numero dos', 0],['texto publico numero tres', 1]]
                const notesPromises = texts.map(elem => Note.create({ user: userId,  text: elem[0], audience: elem[1]}))
                return Promise.all(notesPromises)
                    .then((result) => {
                        createdNotes = result
                    })
            })
            afterEach(() => Note.deleteMany())

            it ('success on correct credentials', () => {
                return retrievePublicNotes(userId) 
                    .then((notesArray) => {
                        expect(notesArray).to.be.instanceOf(Array)
                        expect(notesArray.length).to.be.equal(3)

                        notesArray.forEach(note => { 
                            expect(note.audience).to.be.equal(1)
                        }) 
                    })
            })
        })
        it ('success with no notes except correct credentials', () => {
            return retrievePublicNotes(userId)
                .then((notesArray) => { 
                    expect(notesArray).to.be.instanceOf(Array)
                    expect(notesArray.length).to.be.equal(0)
                })
        })
    })
    describe('when user does not exist', () => { 

        it ('fails with wrong user Id', () => {
            const wrongId = new ObjectId().toString()

            return retrievePublicNotes(wrongId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })
    })
    after(() => disconnect())
})