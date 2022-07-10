require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Account } = require('../models')
const { NotFoundError } = require('../errors')
const deleteAccount = require('./deleteAccount')
const { expect } = require('chai')

describe('deleteAccount', () => {
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

        describe('when user already has accounts', () => {
            let account1, account2

            beforeEach(() => {
                account1 = new Account({ user: user.id, type: Account.CASH, text: 'My savings' })
                account2 = new Account({ user: user.id, type: Account.CREDITCARD, text: 'my salary' })

                return Promise.all([account1.save(), account2.save()])
                    .then(accounts => allAccounts = accounts)
            })

            it('succeeds on correct user data', () => {
                return deleteAccount(user.id, account1.id)
                    .then(result => {
                        expect(result).to.be.undefined

                        return Account.findById(account1.id)
                    })
                    .then((_account1) => {
                        expect(_account1).to.be.null
                    })

            })


        })
        debugger
        describe('when user has no accounts', () => {
            it('succeeds on correct user data', () => {
                const unexistingAccountId = new ObjectId().toString()

                return deleteAccount(user.id, unexistingAccountId)
                    .then(() => {
                        throw new Error('should not reach point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`account with id ${unexistingAccountId} does not exist`)
                    })
            })
        })


        it('fails on incorrect user id', () => {
            const wrongUserId = new ObjectId().toString()
            const unexistingAccountId = new ObjectId().toString()

            deleteAccount(wrongUserId, unexistingAccountId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongUserId} does not exist`)
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()
            const unexistingAccountId = new ObjectId().toString()

            deleteAccount(unexistingUserId, unexistingAccountId)
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