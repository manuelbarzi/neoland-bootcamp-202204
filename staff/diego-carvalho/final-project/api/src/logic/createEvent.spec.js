const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const createEvent = require('./createEvent')
const { expect } = require('chai')

describe('createEvent', () => {
    before(() => connect('mongodb://127.0.0.1:27017/events-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

    describe('when user already exists', () => {
        let user 

        beforeEach(() => {
            user = new User({ name: 'Mar lucia', username: 'marlucia', password: '1234' })

            return user.save()
        })

        it('succeeds on correct user data', () =>
            createEvent(user.id, 'Surf Session Barceloneta','Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                .then(eventId => {
                    expect(eventId).to.be.a('string')

                    return Event.findById(eventId)
                })
                .then(event => {
                    expect(event.user.toString()).to.equal(user.id)
                    expect(event.title).to.equal('Surf Session Barceloneta')
                    expect(event.description).to.equal('Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                    expect(event.date).to.be.instanceOf(Date)
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return createEvent(wrongId, 'Surf Session Barceloneta','Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return createEvent(unexistingUserId,'Surf Session Barceloneta','Una exelente oportunidad para disfrutar de las olas de Barceloneta.')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})