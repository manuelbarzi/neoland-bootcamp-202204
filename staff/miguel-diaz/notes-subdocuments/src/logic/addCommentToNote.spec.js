const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const addComment = require('./addComment')
const { expect } = require('chai')

describe('addComment', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let michelo, dieghino

        beforeEach(() => {
            michelo = new User({ name: 'Miguel', username: 'michelo', password: 'miguel123' })
            dieghino = new User({ name: 'Diego', username: 'dieghino', password: 'miguel123' })

            Promise.all(michelo.save(), dieghino.save())
        })

        describe('When note already exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: michelo.id, text: 'quiero señoritas de Brasil' })
                return note.save()
            })


            it('succeeds on correct data credentials', () => {
                return addComment(dieghino.id, note.id, 'Tu si sabes hermano!')
                    .then(commentId => {
                        expect(commentId).to.be.a('string')

                        return Note.findById(note.id)
                        .then(note => {
                            const comment= note.comments.find(comment => comment._id.toString() === commentId)
                            
                                expect(comment.text).to.be.equal('Tu si sabes hermano!')
                                expect(comment.user.toString()).to.be.equal(dieghino.id)
                                expect(comment.date).to.be.instanceOf(Date)
                            })
                    })
            })
        })

    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})