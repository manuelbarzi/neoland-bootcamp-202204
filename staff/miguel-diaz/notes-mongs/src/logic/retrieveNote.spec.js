const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Note } = require('../models')
const { AuthError } = require('../errors')
const retrieveNote = require('./retrieveNote')
const { expect } = require('chai')

describe('retrieveNote', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    describe('when user already exists', () => {
        let user
        beforeEach(() => {
            return User.create({ name: 'Aitor Menta', username: 'aitormenta', password: '123123123' })


                .then(user => {
                    Note.create([{ user: user.id, text: 'nota 1' }, { user: user.id, text: 'nota 2' }, { user: user.id, text: 'nota 3' }])
                })
        })
        it('succeeds on correct credentials', () => {
            return retrieveNote(user.id)
                .then(result => {
                    expect(result).to.be.an('array')
                    expect(result.length).to.be.an(3)
                    return Note.findOne({ user: user.id })
                })
                .then(note => { 
                    expect(note.user.toString()).to.equal(user.id)
                    expect(note.date).to.be.instanceOf(Date)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})