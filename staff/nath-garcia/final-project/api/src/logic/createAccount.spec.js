require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Account } = require('../models')
const { NotFoundError } = require('../errors')
const createAccount = require('./createAccount')
const { expect } = require('chai')

describe('createAccount', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Account.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({
                name: 'Sid',
                surname: 'Perezoso',
                username: 'sid',
                email: 'sid@mail.com',
                phone: '123456789',
                password: '01020300'
            })

            return user.save()
        })

        it('succeeds on correct user data', () => {
            createAccount(user.id, Account.CASH, 'My savings')
                .then(accountId => {
                    expect(accountId).to.be.a('string')

                    return Account.findById(accountId)
                })
                .then(account => {
                    expect(account.user.toString()).to.equal(user.id)
                    expect(account.type).to.equal(4)
                    expect(note.text).to.equal('My savings')
                })
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return createAccount(wrongId, Account.CASH, 'My savings')
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

            return createAccount(unexistingUserId, Account.CASH, 'My savings')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        }) 
    })

    afterEach(() => Promise.all([User.deleteMany(), Account.deleteMany()]))

    after(() => disconnect())

})