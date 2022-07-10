require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Account } = require('../models')
const { NotFoundError } = require('../errors')
const updateAccount = require('./updateAccount')
const { expect } = require('chai')

describe('updateAccount', () => {

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

        describe('when user already has acounts', () => {
            let account1, account2

            beforeEach(() => {
                account1 = new Account({ user: user.id, type: Account.CASH, text: 'My savings' })
                account2 = new Account({ user: user.id, type: Account.CREDITCARD, text: 'my salary' })

                return Promise.all([account1.save(), account2.save()])
                    .then(accounts => allAccounts = accounts)
            })

            it('succeeds on correct user data', () => {
                return updateAccount(user.id, account2.id, Account.CREDITCARD, 'my salary and extras')
                    .then(result => {
                        expect(result).to.be.undefined

                        return Account.findById(account2.id)
                    })
                    .then((_account1) => {
                        expect(_account1.id).to.equal(account2.id)
                        expect(_account1.type).to.equal(1)
                        expect(_account1.text).to.equal('my salary and extras')
                    })
            })
        })

        describe('when user has no accounts', () => {
            it('succeeds on correct user data', () => {
                const unexistingAccountId = new ObjectId().toString()

                return updateAccount(user.id, unexistingAccountId, Account.CREDITCARD, 'my salary and extras')
                    .then(() => {
                        throw new Error('should not reach point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`account with id ${unexistingAccountId} does not exist`)
                    })
            })
        })

    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()
            const unexistingAccountId = new ObjectId().toString()

            updateAccount(unexistingUserId, unexistingAccountId, Account.CREDITCARD, 'my salary and extras')
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    beforeEach(() => Promise.all([User.deleteMany(), Account.deleteMany()]))

    after(() => disconnect())
})