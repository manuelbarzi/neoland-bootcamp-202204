const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const createNote = require('./createNote')
const { expect } = require('chai')
const { comment } = require('../models/schemas')

describe('addCommentToNote', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let diegoUser1, jordiUser2, paulaUser3
        
        beforeEach(() => {
            diegoUser = new User({ name: 'Diego Carvalho', username: 'diegocarve', password: '1234' })
            paulaUser = new User({ name: 'Paula Carvalho', username: 'paulacarve', password: '1234' })

            return Promise.all([diegoUser1 .save(), jordiUser2.save(),  paulaUser3.save()])

        })
        beforeEach(() => {

            diegoNote = new Note({ user: diegoUser1.id, text: 'hola mundo', audience: 'public', comments: [] })
            paulaNote = new Note({ user: paulaUser3.id, text: 'hello world', audience: 'public' })

            return Promise.all([diegoUser1.save(), diegoUser1.save(), paulaUser3.save()])
        })

        it('succeeds on correct user data with a note', () =>
            addCommentToNote( diegoNote.id ,paulaUser.id, '❤️')
                .then(commentId => {
                    expect(commentId).to.be.a('string')

                    return Note.findById(diegoNote.id)

                    // Note.findOne({ comments: [ _id: commentId]})
                })
                .then(note => {
                    expect(note.comments).to.be.instanceOf(Array)
                    expect(note.comments.length).to.be.equal(1)
                    expect(note.comments[0].comment).to.be.equal('❤️')
                    expect(note.comments[0].comment.date).to.be.instanceOf(Date)
                    expect(note.comments[0].comment).to.be.instanceOf(Comment)
                   
                })
        )

        // it('fails on incorrect user id', () => {
        //     const wrongId = new ObjectId().toString()

        //     return createNote(wrongId, 'Hello World')
        //         .then(() => {
        //             throw new Error('should not reach this point')
        //         })
        //         .catch(error => {
        //             expect(error).to.be.instanceOf(NotFoundError)
        //             expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
        //         })
        // })
    })

    // describe('when user does not exist', () => {
    //     it('fails on unexisting user id', () => {
    //         const unexistingUserId = new ObjectId().toString()

    //         return createNote(unexistingUserId, 'Hello World')
    //             .then(() => {
    //                 throw new Error('should not reach this point')
    //             })
    //             .catch(error => {
    //                 expect(error).to.be.instanceOf(NotFoundError)
    //                 expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
    //             })
    //     })
    // })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})