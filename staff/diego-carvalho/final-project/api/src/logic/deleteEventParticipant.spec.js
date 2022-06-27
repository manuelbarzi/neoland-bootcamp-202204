
const { expect } = require('chai')
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { NotFoundError } = require('../errors')
const { User, Event } = require('../models')
const deleteEventParticipant = require('./deleteEventParticipant')

describe('deleteEventParticipant', () => {
  before(() => connect('mongodb://127.0.0.1:27017/users-db-test'))

  beforeEach(() => User.deleteMany())
  beforeEach(() => Event.deleteMany())

  describe('when user and event already exists', () => {
    let ventuUser, diegoUser, xaviUser, event1, allUsers

    beforeEach(() => {
      ventuUser = new User({ name: 'Ventu', email: 'ventu3@gmail.com', password: '1234' })
      diegoUser = new User({ name: 'Diego', email: 'diego3@gmail.com', password: '1234' })
      xaviUser = new User({ name: 'Xavier', email: 'xavi3@gmail.com', password: '1234' })

      return Promise.all([ventuUser.save(), diegoUser.save(), xaviUser.save()])
        .then(() => {
          event1 = new Event({ owner: ventuUser.id, title: 'event 1', description: 'test event 1', category: 'sport-activities' })

          return event1.save()
            .then(users => {
              allUsers = users
              event1.participants.push(...allUsers.map(user => user._id))

              return event1.save()
            })

        })
    })
    it('succeeds on correct data ', () => {
      return deleteEventParticipant(event1.id, diegoUser.id)
        .then(result => {
          expect(result).to.be.undefined

          return Event.findById(event1.id)
        })
        .then((event) => {

          const exist = event.participants.some(_userId => _userId._id.toString() === diegoUser.id)

          expect(exist).to.be.false

        })
    })

    it('fails when user id does not exist', () => {
      const wrongId = new ObjectId().toString()

      return deleteTargetedEvent(event1.id, wrongId)
        .then(() => {
          throw new Error('it should not reach this point')
        })
        .catch(error => {
          expect(error).to.be.instanceOf(NotFoundError)
          expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
        })
    })


  })

  afterEach(() => User.deleteMany())
  after(() => disconnect())
})
