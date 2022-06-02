const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note, Comment } = require('../models')
const { NotFoundError } = require('../errors')
const deleteCommentFromNote = require('./deleteCommentFromNote')
const { expect } = require('chai')

describe('deleteCommentFromNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let michelo, dieghino

        beforeEach(() => {
            user1 = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
            user2 = new User({ name: 'Mama Chicho', username: 'mamachicho', password: '123123123' })
            Promise.all(user1.save(), user2.save())
        })
        afterEach(() => User.deleteMany())

        describe('When note exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: user1.id, text: 'esto es una nota' })
                return note.save()
            })
            afterEach(() => Note.deleteMany())

            describe('When comment already exists', () => {
                let comment
    
                beforeEach(() => {
                    comment = new Comment({ user: user2.id, text: 'esto es un comment a una nota'})
                    note.comments.push(comment)
                    return note.save()
                })

                it('succeeds on corret data credentials', () => {
                    
                    return deleteCommentFromNote(user2.id, note.id, comment.id)
                        .then(result => {
                            expect(result).to.be.undefined

                            return Note.findById(note.id)
                                .then(note => {
                                    const comment= note.comments.find(comment => comment._id.toString() === comment.id)
                                    expect(comment).to.be.undefined
                                })
                        })
                })

            })

            describe('when comment does not exist', () => {

                it('fails with no comment', () => {
                    const wrongId = new ObjectId().toString() 
                    return deleteCommentFromNote(user2.id, note.id, wrongId)
                        .then(() => {
                            throw new Error('should not reach this point')
                        })
                        .catch(error => {
                            expect(error).to.be.instanceOf(NotFoundError)
                            expect(error.message).to.equal(`comment with id ${wrongId} does not exist`)
                        })
                })
            })
        })
        describe('When note does not exist', () => {

            it('fails without note', () => {
                const wrongId = new ObjectId().toString()
                let comment = new Comment({ user: user2.id, text: 'esto es un comment a una nota'})
                return deleteCommentFromNote(user2.id, wrongId, comment.id)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`note with id ${wrongId} does not exist`)
                    })
            })
        })
    })

    after(() => disconnect())
})