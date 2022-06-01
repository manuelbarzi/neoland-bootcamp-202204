const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note, Comment } = require('../models')
const { NotFoundError } = require('../errors')
const deleteCommentFromNote = require('./deleteCommentFromNote')
const { expect } = require('chai')

describe('deleteCommentFromNote', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let user, user2

        beforeEach(() => {
            user = new User({ name: 'Paula', username: 'cardonatr', password: '199804PCT' })
            user2 = new User({ name: 'Jordi', username: 'Jschaefer', password: '12341234' })

            Promise.all(user.save(), user2.save())
        })
        afterEach(() => User.deleteMany())

        
        describe('When note does not exist', () => {

            it('fails without note', () => {
                const wrongId = new ObjectId().toString()
                
                return deleteCommentFromNote(user2.id, wrongId, wrongId)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`note with id ${wrongId} does not exist`)
                    })
            })

        })

        describe('When note already exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: user.id, text: 'ver el partido futbol sala' })
                return note.save()
            })
            afterEach(() => Note.deleteMany())

            describe('When comment already exists', () => {
                let comment
    
                beforeEach(() => {
                    comment = new Comment({ user: user2.id, text: 'Pasalo muy bien!'})
                    note.comments.push(comment)
                    return note.save()
                })

                it('succeeds on corret data', () => {
                    
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


            describe('When comment does not exist', () => {

                it('fails without comment', () => {
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

        
        // get notes/public
    })
    
    after(() => disconnect())
})