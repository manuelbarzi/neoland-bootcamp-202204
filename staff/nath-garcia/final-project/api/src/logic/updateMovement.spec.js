require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const updateMovement = require('./updateMovement')
const { expect } = require('chai')

describe('updateMovement', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Movement.deleteMany()]))

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

        describe('when user already has novements', () => {
            let movement1, movement2

            beforeEach(() => {
                movement1 = new Movement({ user: user.id, type: 'income', category: Movement.SALARY, concept: 'full salary for january', amount: 2000 })
                movement2 = new Movement({ user: user.id, type: 'outcome', category: Movement.ROUTINE, concept: 'gym', amount: 31 })

                return Promise.all([movement1.save(), movement2.save()])

            })

            it('succeeds on correct user data', () => {
                return updateMovement(user.id, movement1.id, 'income', Movement.SALARY, 'full salary for january', 2100)
                    .then(result => {
                        expect(result).to.be.undefined

                        return Movement.findById(movement1.id)
                    })
                    .then((_movement1) => {
                        expect(_movement1.id).to.equal(movement1.id)
                        expect(_movement1.type).to.equal('income')
                        expect(_movement1.category).to.equal(Movement.SALARY)
                        expect(_movement1.concept).to.equal('full salary for january')
                        expect(_movement1.amount).to.equal(2100)
                    })
            })

        })

        describe('when user has no movements', () => {
            it('succeeds on correct user data', () => {
                const unexistingMovementId = new ObjectId().toString()

                return updateMovement(user.id, unexistingMovementId, 'income', Movement.SALARY, 'full salary for january', 2100)
                    .then(() => {
                        throw new Error('should not reach point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`movement with id ${unexistingMovementId} does not exist`)
                    })
            })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()
            const unexistingMovementId = new ObjectId().toString()

            updateMovement(unexistingUserId, unexistingMovementId, 'income', Movement.SALARY, 'full salary for january', 2100)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    beforeEach(() => Promise.all([User.deleteMany(), Movement.deleteMany()]))

    after(() => disconnect())

})
