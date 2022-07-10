require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const addMovement = require('./addMovement')
const { expect } = require('chai')
const { account } = require('../models/schemas')

describe('addMovement', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Movement.deleteMany()]))

    describe('when user already exists', () => {
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

        it('succeeds on correct user data', () => {
            return addMovement(user.id, 'income', Movement.SALARY, 'full salary for january', 2000, account.id)
                .then(movementId => {
                    expect(movementId).to.be.a('string')

                    return Movement.findById(movementId)
                })
                .then(movement => {
                    expect(movement.user.toString()).to.equal(user.id)
                    expect(movement.type).to.equal('income')
                    expect(movement.category).to.equal(9)
                    expect(movement.concept).to.equal('full salary for january')
                    expect(movement.amount).to.equal(2000)
                   // expect(movement.account.toString()).to.equal(account.id)
                    expect(movement.date).to.be.instanceOf(Date)
                })
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return addMovement(wrongId, 'income', Movement.SALARY, 'full salary for febrary', 1500)
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

            return addMovement(unexistingUserId, 'income', Movement.SALARY, 'full salary for febrary', 1500, account.id)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        }) 
    })

    afterEach(() => Promise.all([User.deleteMany(), Movement.deleteMany()]))

    after(() => disconnect())
})