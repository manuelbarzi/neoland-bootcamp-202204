require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveMovements = require('./retrieveMovements')
const { expect } = require('chai')

describe('retrieveMovements', () => {
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

        describe('when user already has movements', () => {
            let movement1, movement2, allMovements

            beforeEach(() => {
                movement1 = new Movement({ user: user.id, type: 'income', category: Movement.SALARY, concept: 'full salary for january', amount: 2000 })
                movement2 = new Movement({ user: user.id, type: 'outcome', category: Movement.ROUTINE, concept: 'gym', amount: 31 })

                return Promise.all([movement1.save(), movement2.save()])
                    .then(movements => allMovements = movements)
            })

            it('succeeds on correct user data', () => {
                retrieveMovements(user.id)
                    .then(movements => {
                        expect(movements).to.be.instanceOf(Array)

                        expect(movements).to.have.lengthOf(2)

                        movements.forEach(movement => {
                            const found = allMovements.some(_movement => {
                                return _movement.id === movement.id && _movement.type === movement.type && _movement.category === movement.category && _movement.concept === movement.concept && _movement.amount === movement.amount
                            })

                            expect(found).to.be.true
                        })
                    })
            })
        })

        describe('when user has no movements', () => {
            it('succeeds on correct user data', () => {
                retrieveMovements(user.id)
                    .then(movements => {
                        expect(movements).to.be.instanceOf(Array)

                        expect(movements).to.have.lengthOf(0)
                    })
            })
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return retrieveMovements(wrongId)
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

            return retrieveMovements(unexistingUserId)
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