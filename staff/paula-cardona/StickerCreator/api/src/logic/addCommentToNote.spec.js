const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const addCommentToNote = require('./addCommentToNote')
const { expect } = require('chai')

describe('addCommentToNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let user, user2

        beforeEach(() => {
            user = new User({ name: 'Ele Fante', username: 'elefante', password: '123123123' })
            user2 = new User({ name: 'Gi Rafa', username: 'girafa', password: '123123123' })

            Promise.all (user.save(), user2.save())
        })
    
        describe('when note already exist', () => { 
            let note

            beforeEach(() => {
                note = new Note({ user: user.id, text: 'tengo la trompa larga'})

                return note.save()
            })

            it('succeds on correct data', () => {
               
                return addCommentToNote(user2.id, note.id, 'yo el cuello')
                    .then ((commentId)=>{
                        expect(commentId).to.be.a('string')

                        return Note.findById(note.id) //no podemos buscar por comentario porque no existe la base de datos de comentario
                        .then (note=> {
                            const comment = note.comments.find(comment => comment._id.toString() === commentId)

                                expect(comment.text).to.be.equal('yo el cuello')
                                expect(comment.user.toString()).to.be.equal(user2.id)
                            })
                        
                    })
            
            })
        })
    })


            
            
            
            
            
    
            
            
            
//             it('succeeds on correct user data', () =>
//                 createNote(user.id, 'Hola Mundo')
//                     .then(noteId => {
//                         expect(noteId).to.be.a('string')

//                         return Note.findById(noteId)
//                     })
//                     .then(note => {
//                         // expect(note.user.toString()).to.equal(user._id.toString())
//                         expect(note.user.toString()).to.equal(user.id)
//                         expect(note.text).to.equal('Hola Mundo')
//                         expect(note.date).to.be.instanceOf(Date)
//                     })
//             )

//             it('fails on incorrect user id', () => {
//             const wrongId = new ObjectId().toString()

//             return createNote(wrongId, 'Hello World')
//                 .then(() => {
//                     throw new Error('should not reach this point')
//                 })
//                 .catch(error => {
//                     expect(error).to.be.instanceOf(NotFoundError)
//                     expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
//                 })
//         })
//     })

//     describe('when user does not exist', () => {
//         it('fails on unexisting user id', () => {
//             const unexistingUserId = new ObjectId().toString()

//             return createNote(unexistingUserId, 'Hello World')
//                 .then(() => {
//                     throw new Error('should not reach this point')
//                 })
//                 .catch(error => {
//                     expect(error).to.be.instanceOf(NotFoundError)
//                     expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
//                 })
//         })
//     })

//     afterEach(() => User.deleteMany())

    after(() => disconnect())
})
