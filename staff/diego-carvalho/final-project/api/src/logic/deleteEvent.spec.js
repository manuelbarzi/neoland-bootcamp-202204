const { expect } = require('chai')
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { NotFoundError } = require('../errors')
const { User, Event} = require('../models')
const deleteEvent = require('./deleteEvent')


describe('deleteEvent', () => {
    before(() => connect('mongodb://127.0.0.1:27017/event-db-test'))

    beforeEach(() => User.deleteMany())
    beforeEach(() => Event.deleteMany())

    describe('when user already exists', () => {
        let userId

        beforeEach(() => {
            return User.create({ name: 'Diego Carvalho', username: 'diegocarva', password: '1234' })
                .then((user) => {
                    userId = user.id

                })
        })

        it('succeeds events and correct credentials', () => {
            let eventId

            return Event.create({ user: userId, title: 'After Work Mar Bella', description:'Únete a nosotros si quieres  disfrutar...' })
                .then((result) => {
                    eventId = result.id

                    return deleteEvent(userId, eventId)
                })
                .then((result) => {
                    expect(result).to.be.undefined

                    return Event.findById(eventId)

                })
                .then((event) => {
                    expect(event).to.be.null
                })
        })

        it('fails when event id does not exist', () => {
            const wrongId = new ObjectId().toString()

            return deleteEvent(userId, wrongId)
                .then(() => {
                    throw new Error('it should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`event with id ${wrongId} does not exist`)
                })
        })

    })

    describe('When user does not exist', () => {

        it('fails with wrong user Id', () => {
            const wrongId = new ObjectId().toString()
            const userId = new ObjectId().toString()

            let eventId
            return Event.create({ user: userId, title: 'Sol, playa y voley', description:'Sol, playa, voley y mucha diversión para empezar bien el día. Ven a disfrutar...' })
                .then((result) => {
                    eventId = result.id

                    return deleteEvent(wrongId, eventId) // llamo a nuestra funcion
                })
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user id ${wrongId} does not found`)
                })
        })

    })

    afterEach(() => User.deleteMany())
    after(() => disconnect())
})
