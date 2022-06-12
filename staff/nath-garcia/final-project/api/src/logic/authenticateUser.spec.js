const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { AuthError } = require('../errors')
const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')

describe('authenticateUser', () => {
    before(() => connect('mongodb://localhost:27017/final-pro-test'))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Peppa', surname: 'Pig', username: 'lapeppa', email: 'lapeppa@mail.com', phone: 643643643, password: '01020300' })

            return user.save()
        })

        it('succeeds on correct credentials', () =>
            authenticateUser('lapeppa', '01020300')
                .then(userId => {
                    expect(userId).to.be.a('string')
                    expect(userId).to.equal(user.id)
                })
        )

        it('fails on incorrect password', () =>
            authenticateUser('lapeppa', '01020300-wrong')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )

        it('fails on incorrect username', () =>
            authenticateUser('lapeppa-wrong', '01020300')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )
    })

    describe('when user does not exist', () => {
        it('fails on credentials from non-existing user', () =>
            authenticateUser('peppa', '123123123')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )
    })
    
    afterEach(() => User.deleteMany())

    after(() => disconnect())
})