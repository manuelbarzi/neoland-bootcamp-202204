const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { ConflictError } = require('../errors')
const toggleUserToEvent = require('./toggleUserToEvent')
const { expect } = require('chai')

describe('addEventToUser', () => {
  before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

  beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

  describe('when user already exists', () => {
    let diego

    beforeEach(() => {
      diego = new User({ name: 'Diego Carva', email: 'diegodocaralho@gmail.com', password: '1234' })

      return diego.save()

    })
    describe('when event exists', () => {
      let event1

      beforeEach(() => {
        event1 = new Event({ user: diego.id, title: 'Samba Brasil', description: "test" })

        return event1.save()
      })
      debugger
      it('succeeds on correct data ', () => {
        return toggleUserToEvent(diego.id, event1.id)
          .then(() => {
            return Event.findById(event1.id)
              .then(event => {
                const exists = event.participants.some(function (userId) {
                  return userId.toString() === diego.id
                })
                expect(exists).to.be.true
              })
          })
      })

      describe('when user already has participated', () => {
        beforeEach(() => {
          event1.participants.push(diego.id)

          return event1.save()
        })

        it('succeeds when try sign out of event ', () => {
          return toggleUserToEvent(diego.id, event1.id)
            .then(result => {
              expect(result).to.be.undefined
            })
        })
      })
    })
  })

  afterEach(() => User.deleteMany())

  after(() => disconnect())
})

