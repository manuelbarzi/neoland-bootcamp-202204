require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const deleteMovement = require('./deleteMovement')
const { expect } = require('chai')

describe('deleteMovement', () => {
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
                return deleteMovement(user.id, movement1.id)
                    .then(result => {
                        expect(result).to.be.undefined

                        return Movement.findById(movement1.id)
                    })
                    .then((_movement1) => {
                        expect(_movement1).to.be.null
                    })

            })


        })

        describe('when user has no movements', () => {
            it('succeeds on correct user data', () => {
                const unexistingMovementId = new ObjectId().toString()

                return deleteMovement(user.id, unexistingMovementId)
                    .then(() => {
                        throw new Error('should not reach point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`movement with id ${unexistingMovementId} does not exist`)
                    })
            })
        })


        it('fails on incorrect user id', () => {
            const wrongUserId = new ObjectId().toString()
            const unexistingMovementId = new ObjectId().toString()

            deleteMovement(wrongUserId, unexistingMovementId)
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
            const unexistingMovementId = new ObjectId().toString()

            deleteMovement(unexistingUserId, unexistingMovementId)
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