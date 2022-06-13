require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { AuthError } = require('../errors')
const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')

describe('authenticateUser', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => User.deleteMany())

    describe('when user already exists', () => {
        let user //para poder usarlo fuera

        beforeEach(() => {
            user = new User({ name: 'Papa', surname:'Gayo', username: 'papagayo', email: 'papagayo@gmail.com', password: '123123123', address:'Calle Madrid' })

            return user.save() 
        })

        it('succeeds on correct credentials', () =>
            authenticateUser('papagayo', '123123123')
                .then(userId => {
                    expect(userId).to.be.a('string')
                    expect(userId).to.equal(user.id)
                })
        )

        it('fails on incorrect password', () =>
            authenticateUser('papagayo', '123123123-wrong')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(AuthError)
                    expect(error.message).to.equal('wrong credentials')
                })
        )

        it('fails on incorrect username', () =>
            authenticateUser('papagayo-wrong', '123123123')
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
            authenticateUser('papagayo', '123123123') //no coge el user creado porque esta en un nuevo describe
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




