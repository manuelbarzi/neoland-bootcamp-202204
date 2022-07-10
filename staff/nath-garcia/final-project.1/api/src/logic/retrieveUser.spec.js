const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveUser = require('./retrieveUser')
const { expect } = require('chai')

describe('retrieveUser', () => {
    before(() => connect('mongodb://localhost:27017/final-pro-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exisits', () => {
        let user

        beforeEach(() => {
            user = new User({
                name: 'Peppa',
                surname: 'Pig',
                username: 'lapeppa',
                email: 'lapeppa@mail.com',
                phone: '643643643', 
                password: '01020300'
            })

            return user.save()
        })

        it('succeeds on correct user id', () =>
            retrieveUser(user.id)
                .then(user => {
                    expect(user.constructor).to.equal(Object)
                    expect(user.name).to.equal('Peppa')
                    expect(user.surname).to.equal('Pig')
                    expect(user.username).to.equal('lapeppa')
                    expect(user.email).to.equal('lapeppa@mail.com')
                    expect(user.phone).to.equal('643643643')
                    expect(user.password).to.be.undefined
                    expect(user.id).to.be.undefined
                })
        )

        it('fails on incorrect id', () => {
            const wrongId = new ObjectId().toString()

            retrieveUser(wrongId)
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
        it('fails on user id from non-existing user', () => {
            const unexistingUserId = new ObjectId().toString()

            retrieveUser(unexistingUserId)
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