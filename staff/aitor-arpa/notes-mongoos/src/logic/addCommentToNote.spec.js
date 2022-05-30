const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note, Comment } = require('../models')
const { NotFoundError } = require('../errors')
const addCommentToNote = require('./addCommentToNote')
const { expect } = require('chai')
const { object } = require('webidl-conversions')

describe('add Coments To Note', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    /*   beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()])) */

    describe('when user already exists', () => {
       
        let user1 = new User({ name: 'jon', username: 'John', password: 'Doe' })
        let usercoment = new User({ name: 'mari', username: 'Maria', password: 'Doe' })
        Promise.all([user1.save(), usercoment.save()])

        let note = new Note({ user: user1.id, text: 'hola mon' })
        let comment = new Comment({ user: usercoment.id, text: 'new coment' })
        Promise.all([note.save(), comment.save()])
       
        it('succes on note exist and user exist', () =>
           
            addCommentToNote(usercoment.id, note.id, comment.text)
                .then(result => {
                   
                    expect(result.matchedCount).to.be.equal(1)
                    expect(result.modifiedCount).to.be.equal(1)
                    expect(result).to.be.instanceOf(Object)
                })
        )
        debugger
        it('succes on note not exist and user exist', () =>
        
        addCommentToNote(note.id, usercoment.id, comment.text)
        
            .catch(result => {
               
                expect(result.message).to.be.equal('User Not found')                
                expect(result).to.be.instanceOf(NotFoundError)
            })
    )

        



    })
})

before(() => disconnect('mongodb://localhost:27017/notes-db-test'))