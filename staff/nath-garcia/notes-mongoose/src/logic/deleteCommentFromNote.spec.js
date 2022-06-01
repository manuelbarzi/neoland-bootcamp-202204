const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note, Comment } = require('../models')
const deleteCommentFromNote = require('./deleteCommentFromNote')
const { expect } = require('chai')
const { comment, note } = require('../models/schemas')

describe('deleteCommentFromNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exist', () => {
        let user1, user2

        beforeEach(() => {
            user1 = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
            user2 = new User({ name: 'Choco Late', username: 'chocolate', password: '123456789' })

            return Promise.all([user1.save(), user2.save()]) 
        
        })

        describe('when user already has notes', () => {
            let note1, note2, note3, allNotes

            beforeEach(() => {
                note1 = new Note({ user: user1.id, text: 'note 1' })
                note2 = new Note({ user: user1.id, text: 'note 2' })
                note3 = new Note({ user: user1.id, text: 'note 3' })

                return Promise.all([note1.save(), note2.save(), note3.save()])
                    .then(notes => allNotes = notes)
            })

            describe('when note already has comment', () => {
                let comment 

            beforeEach(() => {
                comment = new Comment({ user: user2.id, note1, text: 'new comment' })

                note1.comments.push(comment)

                return note1.save()
            })
            

            it('succeeds on correct user data', () => {
                deleteCommentFromNote(user2.id, note1.id, comment.id)
                    .then(result => {
                        expect(result).to.be.undefined

                       return Note.findById(note1.id)
                    })
                    .then(note1 => {
                       const commentExist =  note1.comments.some(comment => comment._id.toString() === commentId)

                       expect(commentExist).to.be.false

                    })
                })
            })
        })
    })
    afterEach(() => User.deleteMany())

    after(() => disconnect())
})
