const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const addCommentToNote = require('./addCommentToNote')
const { expect } = require('chai')
const { comment } = require('../models/schemas')

describe('addCommentToNote', () => {
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

            it('succeeds on correct user data', () => {
                addCommentToNote(user1.id, note1.id, 'my commentary')
                    .then(commentId => {
                        expect(commentId).to.be.a('string')

                       return Note.findById(note1.id)
                    })
                    .then(note1 => {
                       const comment =  note1.comments.find(comment => comment._id.toString() === commentId)

                        expect(comment.user.toString()).to.equal(user1.id)
                        expect(comment.text).to.equal('')
                        expect(comment.date).to.be.instanceOf(Date)
                    })
            })
        })
    })
     afterEach(() => User.deleteMany())

    after(() => disconnect())
})
