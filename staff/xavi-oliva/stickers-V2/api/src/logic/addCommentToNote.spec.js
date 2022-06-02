const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const addCommentToNote = require('./addCommentToNote')
const { expect } = require('chai')

describe('addCommentToNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let user1, user2

        beforeEach(() => {
            user1 = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
            user2 = new User({ name: 'Mama Chicho', username: 'mamachicho', password: '123123123' })

            Promise.all(user1.save(), user2.save())
        })

        describe('When note already exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: user1.id, text: 'esto es una nota' })
                return note.save()
            })


            it('succeeds on correct data credentials', () => {
                return addCommentToNote(user2.id, note.id, 'esto es un comment a una nota')
                    .then(commentId => {
                        expect(commentId).to.be.a('string')

                        return Note.findById(note.id)
                        .then(note => {
                            const comment= note.comments.find(comment => comment._id.toString() === commentId)
                            
                                expect(comment.text).to.be.equal('esto es un comment a una nota')
                                expect(comment.user.toString()).to.be.equal(user2.id)
                                expect(comment.date).to.be.instanceOf(Date)
                            })
                    })
            })
        })

    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})