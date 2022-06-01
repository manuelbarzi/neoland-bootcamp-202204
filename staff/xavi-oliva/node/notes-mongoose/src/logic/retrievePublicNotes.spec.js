const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require("../models")
const { NotFoundError } = require('../errors')
const retrievePublicNotes = require('./retrievePublicNotes')
const { expect } = require('chai')

describe('retrievePublicNotes', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => {
        let userId

        beforeEach (()=> {
            return User.create({name:'Papa Gayo', username: 'papagayo', password: '123123123'}) 
                .then((user) => {
                    userId = user.id 
            })
        })
        afterEach(() => User.deleteMany())

        describe('when user already has notes',() => {
            let allNotes

            beforeEach(() => {
                const texts = [
                    ['public note 1', 1],
                    ['public note 2', 1],
                    ['private note 1', 0],
                    ['private note 2', 0],
                    ['public note 3', 1]
                ]
                const notesPromises = texts.map(elem => Note.create({ user: userId,  text: elem[0], audience: elem[1]}))
                return Promise.all(notesPromises)
                    .then((result) => {
                        allNotes = result
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


        it ('success without notes but correct credentials', () => {
            return retrievePublicNotes(userId)
                .then((notesArray) => { 
                    expect(notesArray).to.be.instanceOf(Array)
                    expect(notesArray.length).to.be.equal(0)
                })
        })

    })


    describe('When user does not exist', () => { 

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