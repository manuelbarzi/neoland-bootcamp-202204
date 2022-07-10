require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Account } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveAccounts = require('./retrieveAccounts')
const { expect } = require('chai')

describe('retrieveAccounts', () => {
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
                retrieveAccounts(user.id)
                    .then(accounts => {
                        expect(accounts).to.be.instanceOf(Array)

                        expect(accounts).to.have.lengthOf(2)
                        accounts.forEach(account => {
                            const found = allAccounts.some(_account => {
                                return _account.id === account.id && _account.type === account.type
                            })

                            expect(found).to.be.true
                        })
                    })
            })

            describe('when user has no accounts', () => {
                it('succeeds on correct user data', () => {
                    retrieveAccounts(user.id)
                        .then(accounts => {
                            expect(accounts).to.be.instanceOf(Array)

                            expect(accounts).to.have.lengthOf(0)
                        })
                })
            })

            it('fails on incorrect user id', () => {
                const wrongId = new ObjectId().toString()

                return retrieveAccounts(wrongId)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                    })
            })
        })
 
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return retrieveAccounts(unexistingUserId)
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