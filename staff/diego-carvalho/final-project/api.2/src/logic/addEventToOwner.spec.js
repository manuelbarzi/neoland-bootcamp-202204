const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Event } = require('../models')
const { NotFoundError } = require('../errors')
const addEventToOwner = require('./addEventToOwner')
const { expect } = require('chai')


describe('addEventToOwner', () => {
  before(() => connect('mongodb://127.0.0.1:27017/notes-db-test'))

  beforeEach(() => Promise.all([User.deleteMany(), Event.deleteMany()]))

  describe('when user already exists', () => {
    let diegoUser

    beforeEach(() => {
      diegoUser = new User({ name: 'Diego Carvalho', email: 'diegocarve@gmail.com', password: '1234' })

      return Promise.all([diegoUser.save()])

    })
    describe('when event exists', () => {
      let event

      beforeEach(() => {
        event = new Event({ user: diegoUser.id, title: 'hello world', description: "test" })

        return event.save()
      })

      it('succeeds on correct data ', () => {
        return addEventToOwner(event.id, diegoUser.id)
          .then(eventId => {
            expect(eventId).to.be.a('string')
            debugger
            return User.findById(event.id)
              // Note.findOne({ comments: [ _id: commentId]})
              .then(user => {

                const ownerEvent = user.events.find(ownerEvent => ownerEvent._id.toString() === eventId)

                expect(ownerEvent.user.toString()).to.be.equal(diegoUser.id)

              })
          })

      })
    })

  })


  afterEach(() => User.deleteMany())

  after(() => disconnect())
})