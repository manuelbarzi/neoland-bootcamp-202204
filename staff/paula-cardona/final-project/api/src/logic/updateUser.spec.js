require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { NotFoundError } = require('../errors')
const updateUser = require('./updateUser')
const { expect } = require('chai')

describe('updateUser', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Wendy', surname: 'Pan', username: 'wendypan', email:'wendypan@gmail.com', password: '123123123', address: 'Calle Barcelona' })

            return user.save()
        })

        it('succeeds on correct user data', () =>
            updateUser(user.id, 'Pepe', 'Gayo', 'pepegayo@gmail.com')
                .then(result => {
                    expect(result).to.be.undefined

                    return User.findById(user.id)
                })
                .then(user => {
                    
                    expect(user.name).to.equal('Pepe')
                    expect(user.surname).to.equal('Gayo')
                    expect(user.username).to.equal('wendypan')
                    expect(user.email).to.equal('pepegayo@gmail.com')
                    expect(user.password).to.equal('123123123')
                    expect(user.address).to.be.instanceOf(Array)
                })
        )

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return updateUser(wrongId, 'Pepe Gayo', null, 'pepe@gayo.com', '+34123123123')
                .then(result => {
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

            return updateUser(unexistingUserId, 'Pepe Gayo', null, 'pepe@gayo.com', '+34123123123')
                .then(result => {
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