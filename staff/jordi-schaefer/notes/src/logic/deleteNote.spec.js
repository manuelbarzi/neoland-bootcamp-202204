const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require("../models")
const { NotFoundError } = require('../errors')
const deleteNote = require('./deleteNote')
const { expect } = require('chai')

describe('deleteNote', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user exists', () => {
        let userId
        
        beforeEach (()=> {
            return User.create({name:'Jordi', username: 'Jorgesito', password: '123123123'})
                .then((user) => {
                    userId = user.id 
            })
        })


        it ('success with notes and correct credentials', () => {
            let noteId
            return Note.create({ user: userId,  text: 'mi test note for deleteNote'})
                .then((result)=> {
                    noteId = result.id

                    return deleteNote(userId, noteId) // llamo a nuestra funcion
                }) 
                .then((result)=>{
                    expect(result).to.be.undefined

                    return Note.findById(noteId) 
                })
                .then((note) => {
                    expect(note).to.be.null
                })
        })


        it ('fails without notes', () => {
            const wrongId = new ObjectId().toString()

            return deleteNote(userId, wrongId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`note with id ${wrongId} does not exist`)
                })
        })

    })


    describe('When user does not exist', () => { 

        it ('fails with wrong user Id', () => {
            const wrongId = new ObjectId().toString()
            const userId = new ObjectId().toString()

            let noteId
            return Note.create({ user: userId,  text: 'mi test note for deleteNote'})
                .then((result)=> {
                    noteId = result.id

                    return deleteNote(wrongId, noteId) // llamo a nuestra funcion
                }) 
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })

    })


})