const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note, Reaction } = require('../models')
const { NotFoundError } = require('../errors')
const toggleReactionOnNote = require('./toggleReactionOnNote')
const { expect } = require('chai')

describe('toggleReactionOnNote', () => {
    before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let michelo, dieghino

        beforeEach(() => {
            michelo = new User({ name: 'Miguel', username: 'michelo', password: 'miguel123' })
            dieghino = new User({ name: 'Diego', username: 'dieghino', password: 'miguel123' })

            Promise.all(michelo.save(), dieghino.save())
        })
        afterEach(() => User.deleteMany())

        describe('When note already exists', () => {
            let note

            beforeEach(() => {
                note = new Note({ user: michelo.id, text: 'QUIERO IRME A BRASIL OSTIASS!' })
                return note.save()
            })
            afterEach(() => Note.deleteMany())


            it('succeeds on corret data', () => {
                return toggleReactionOnNote(dieghino.id, note.id, Reaction.LOVE)
                    .then(result => {
                        expect(result).to.be.undefined

                        return Note.findById(note.id)
                        .then(note => {
                            const reaction= note.reactions.find(react => react.michelo.toString() === dieghino.id)
                            
                                expect(reaction.michelo.toString()).to.be.equal(dieghino.id)
                                expect(reaction.type).to.be.equal(1)
                            })
                    })
            })
        })
    })    
    after(() => disconnect())
})