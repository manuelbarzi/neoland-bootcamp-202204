const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { NotFoundError } = require('../errors')
const retrievePublicNotes = require('./prueba1')
const { expect } = require('chai')

describe('retrievePublicNotes', () => {
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
                note = new Note({ user: michelo.id, text: 'quiero señoritas de Brasil', audience: 1 })
                return note.save()
            })


            it('succeeds on correct data credentials', () => {
                return retrievePublicNotes(michelo.id, note.id, 1)
                    .then(audience => {
                        expect(audience).to.be.equal(1)

                        return Note.findById(note.id)
                        .then(note => {
                            const audience = note.audience.enum
                            
                                expect(audience.enum).to.be.a('number')
                                expect(audience.user.toString()).to.be.equal(michelo.id)
                                expect(audience.date).to.be.instanceOf(Date)
                            })
                    })
            })
        })
    })
    
    afterEach(() => User.deleteMany())

    after(() => disconnect())
})
