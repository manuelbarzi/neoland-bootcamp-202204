const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note, Comment } = require('../models')
const { NotFoundError} = require('../errors')
const deleteCommentFromNote = require('./deleteCommentFromNote')
const { expect } = require('chai')

describe('deleteCommentFromNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany(), Comment.deleteMany()]))

    describe('when user already exists', () => {
        
        let user, user2

        beforeEach(() => {
            user = new User({ name: 'Ele Fante', username: 'elefante', password: '123123123' })
            user2 = new User({ name: 'Gi Rafa', username: 'girafa', password: '123123123' })
            
            Promise.all (user.save(), user2.save())
        })
    
        describe('when note already exist', () => { 
            let note
            let comment

            beforeEach(() => {
                note = new Note({ user: user.id, text: 'quiero vacaciones'})

                return note.save()
            })

            describe('when comment already exist', () => { 

                beforeEach(() => {
                    comment = new Comment({ user: user2.id, text:'vamos a menorca'}) //crearlo asi es sincrono, note.create no.
                    note.comments.push(comment)
                    return note.save() 
                })

                it('succeds on correct data', () => {
                return deleteCommentFromNote(user.id, note.id, comment.id)
                        .then ((result)=>{
                            expect(result).to.be.undefined

                            return Note.findById(note.id) //no podemos buscar por comentario porque no existe la base de datos de comentario
                            .then (note=> {
                                const _comment = note.comments.find(comment => comment._id.toString() === comment.id)
                                expect(_comment).to.be.undefined
        
                                
                            })                  
                            
                        })
                })
                
            })
            describe ('when comment does not exist', () => {

                it ('fails without comments', () => {
                    const wrongId = new ObjectId().toString()
                    
                    return deleteCommentFromNote(user.id, note.id, wrongId)
                        .then(() => {
                            throw new Error('should not reach this point') //entra aquí cuando no devuelve nada y no encuentra errores
                        })
                        .catch(error => {
                            expect(error).to.be.instanceOf(NotFoundError)
                            expect(error.message).to.equal(`comment with id ${wrongId} does not exist`)
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
/*
CUANDO EL USUARIO EXISTE Y LA NOTA TAMBIÉN
-creamos un usuario 
-con el que tendrale ponemos una nota
-le ponemos un comentario (de otro usuario) / usuario 2 deja comentario en nota de usuario 1

- llamamos a nuestra funcion / funcion tendrá por parametros un userId, noteId i comentarioId
- espero como resultado de la función nada  (undefined)
- hago un find de la notaid
- me devuelve la nota
- mirare si esta el comentario id
- espero como resultado nada, undefined





*/