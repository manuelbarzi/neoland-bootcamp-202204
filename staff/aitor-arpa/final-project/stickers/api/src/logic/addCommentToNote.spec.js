const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const addCommentToNote = require('./addCommentToNote')
const { expect } = require('chai')

describe('addCommentToNote', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))
    
    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let michelo, dieghino

        beforeEach(() => {
            michelo = new User({ name: 'Miguel', username: 'miky', password: 'miguel123' })
            dieghino = new User({ name: 'Diego', username: 'dieghino', password: 'miguel123' })

            Promise.all(michelo.save(), dieghino.save())
        })
        afterEach(() => User.deleteMany())

        describe('When note already exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: michelo.id, text: 'QUIERO IR A BRASIL!!!' })
                return note.save()
            })
            afterEach(() => Note.deleteMany())

            it('succeeds on corret data', () => {
                return addCommentToNote(dieghino.id, note.id, 'GRANDEE!')
                    .then(commentId => {
                        expect(commentId).to.be.a('string')

                        return Note.findById(note.id)
                        .then(note => {
                            const comment= note.comments.find(comment => comment._id.toString() === commentId)
                            
                                expect(comment.text).to.be.equal('GRANDEE!')
                                expect(comment.michelo.toString()).to.be.equal(dieghino.id)
                                expect(comment.date).to.be.instanceOf(Date)
                            })
                    })
            })
        })
        describe('when note does not exists', () => { 

            it('fails without note', () => {
                const wrongId = new ObjectId().toString()
                
                return addCommentToNote(dieghino.id, wrongId, 'Pasalo muy bien!')
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