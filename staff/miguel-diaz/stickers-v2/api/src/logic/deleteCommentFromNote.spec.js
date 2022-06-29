const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note, Comment } = require('../models')
const { NotFoundError } = require('../errors')
const deleteComment = require('./deleteComment')
const { expect } = require('chai')

describe('deleteComment', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let michelo, dieghino

        beforeEach(() => {
            michelo = new User({ name: 'Miguel', username: 'michelo', password: 'miguel123' })
            dieghino = new User({ name: 'Diego', username: 'dieghino', password: 'miguel123' })
            Promise.all(michelo.save(), dieghino.save())
        })
        afterEach(() => User.deleteMany())

        describe('When note exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: michelo.id, text: 'quiero señoritas brasileñas' })
                return note.save()
            })
            afterEach(() => Note.deleteMany())

            describe('When comment already exists', () => {
                let comment
    
                beforeEach(() => {
                    comment = new Comment({ user: dieghino.id, text: 'Tu si sabes hermano!'})
                    note.comments.push(comment)
                    return note.save()
                })

                it('succeeds on corret data credentials', () => {
                    
                    return deleteComment(dieghino.id, note.id, comment.id)
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
                    return deleteComment(dieghino.id, note.id, wrongId)
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
                return deleteComment(dieghino.id, wrongId, wrongId)
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