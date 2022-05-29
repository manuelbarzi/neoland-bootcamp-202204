const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require("../models")
const { NotFoundError, ConflictError } = require('../errors')
const updateNote = require('./updateNote')
const { expect } = require('chai')


describe('updateNote', () => {
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


        describe('when user has notes', () => {
            let noteId

            beforeEach(() => {
                return Note.create({ user: userId,  text: 'mi test note for update'})
                    .then((_note) => {
                        noteId = _note.id
                    })
            })
            
            it ('success with notes and correct credentials', () => {
                return updateNote(userId, noteId, 'new text for update') // llamo a nuestra funcion
                    .then((result)=>{
                        expect(result).to.be.undefined
    
                        return Note.findById(noteId) 
                    })
                    .then((note) => {
                        expect(note.text).to.be.equal('new text for update')
                    })
            })

        })




        it ('fails without notes', () => {
            const wrongId = new ObjectId().toString()

            return updateNote(userId, wrongId, 'new text for update')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`note with id ${wrongId} does not exist`)
                })
        })

    })


    describe('When note does not belong to the user', () => { 

        it ('fails with wrong user Id', () => {
            const wrongId = new ObjectId().toString()
            const userId = new ObjectId().toString()

            let noteId
            return Note.create({ user: userId,  text: 'mi test note for deleteNote'})
                .then((result)=> {
                    noteId = result.id

                    return updateNote(wrongId, noteId, 'new text for update') // llamo a nuestra funcion
                }) 
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(ConflictError)
                    expect(error.message).to.equal(`note with id ${noteId} does not belong to user with id ${wrongId}`)
                })
        })

    })

    after(() => disconnect())
})