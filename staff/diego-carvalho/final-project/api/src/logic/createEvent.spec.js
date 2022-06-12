const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const createEvent = require('./createEvent')
const { expect } = require('chai')

describe('createEvent', () => {
    before(() => connect('mongodb://127.0.0.1:27017/events-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

    describe('when owner already exists', () => {
        let owner
    
        beforeEach(() => {
            owner = new User({ name: 'Mar lucia', email: 'marlucia@gmail.com', password: '1234' })

            return owner.save()
        })

        it('succeeds on correct owner data', () =>
            createEvent(owner.id, 'Surf Session Barceloneta','Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                .then(eventId => {
                    expect(eventId).to.be.a('string')

                    return Event.findById(eventId)
                })
                .then(event => {
                    expect(event.owner.toString()).to.equal(owner.id)
                    expect(event.title).to.equal('Surf Session Barceloneta')
                    expect(event.description).to.equal('Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                    expect(event.date).to.be.instanceOf(Date)
                })
        )

        it('fails on incorrect owner id', () => {
            const wrongId = new ObjectId().toString()

            return createEvent(wrongId, 'Surf Session Barceloneta','Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`owner with id ${wrongId} does not exist`)
                })
        })
    })

    describe('when owner does not exist', () => {
        it('fails on unexisting owner id', () => {
            const unexistingOwnerId = new ObjectId().toString()

            return createEvent(unexistingOwnerId , 'Surf Session Barceloneta','Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`owner with id ${unexistingOwnerId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})