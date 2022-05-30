const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const addCommentToNote = require('./addCommentToNote')
const { expect } = require('chai')

describe('addCommentToNote', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let user, user2

        beforeEach(() => {
            user = new User({ name: 'Paula', username: 'cardonatr', password: '199804PCT' })
            user2 = new User({ name: 'Jordi', username: 'Jschaefer', password: '12341234' })

            Promise.all(user.save(), user2.save())
        })

        describe('When note already exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: user.id, text: 'ver el partido futbol sala' })
                return note.save()
            })


            it('succeeds on corret data', () => {
                debugger
                return addCommentToNote(user2.id, note.id, 'Pasalo muy bien!')
                    .then(commentId => {
                        expect(commentId).to.be.a('string')

                        return Note.findById(note.id)
                        .then(note => {
                            const comment= note.comments.find(comment => comment._id.toString() === commentId)
                            
                                expect(comment.text).to.be.equal('Pasalo muy bien!')
                                expect(comment.user.toString()).to.be.equal(user2.id)
                                expect(comment.date).to.be.instanceOf(Date)
                            })
                    })
            })

            
            
            
        })

    })
    //afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    
    after(() => disconnect())

        
        /*
        it('succeeds on correct user data', () =>
            createNote(user.id, 'Hola Mundo')
                .then(noteId => {
                    expect(noteId).to.be.a('string')

                    return Note.findById(noteId)
                })
                .then(note => {
                    // expect(note.user.toString()).to.equal(user._id.toString())
                    expect(note.user.toString()).to.equal(user.id)
                    expect(note.text).to.equal('Hola Mundo')
                    expect(note.date).to.be.instanceOf(Date)
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return createNote(wrongId, 'Hello World')
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

            return createNote(unexistingUserId, 'Hello World')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
        */
})