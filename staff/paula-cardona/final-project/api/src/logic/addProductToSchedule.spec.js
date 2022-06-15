


const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Schedule, Product } = require('../models')
const { NotFoundError } = require('../errors')
const addProductToSchedule = require('./addProductToSchedule')
const { expect } = require('chai')



describe('addProductToSchedule', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa', surname: 'Gayo', username: 'papagayo', email: 'papagayo@gmail.com', password: '123123123', address: 'Calle Madrid' })

            return user.save()
        })
        afterEach(() => User.deleteMany())

        describe('when schedule and product already exists', () => {
            let schedule
            let product


            beforeEach(() => {
                schedule = new Schedule({ user: user.id })
                product = new Product({ title: 'baguette', description: 'baguette francesa' })

                return Promise.all([schedule.save(), product.save()])
            })

            afterEach(() => Promise.all([Schedule.deleteMany(), Product.deleteMany()]))


            it('succeds on correct data', () => {
                return addProductToSchedule(user.id, 'monday', product.id, 1)
                    .then((itemId) => {
                        expect(itemId).to.be.a('string')

                        return Schedule.findById(schedule.id)
                            .then((schedule) => {

                                const item = schedule.monday[0]

                                expect(item.id).to.be.equal(itemId)
                                expect(item.product.toString()).to.be.equal(product.id) // cadena infinita
                                expect(item.quantity).to.be.equal(1)
                            })

                    })
            })
        })

        describe('when user does not exists', () => {

            let schedule
            let product

            beforeEach(() => {
                schedule = new Schedule({ user: user.id })
                product = new Product({ title: 'baguette', description: 'baguette francesa' })

                return Promise.all([schedule.save(), product.save()])
            })

            afterEach(() => Promise.all([Schedule.deleteMany(), Product.deleteMany()]))

            it('fails without user', () => {
                const unexistingUserId = new ObjectId().toString()

                return addProductToSchedule(unexistingUserId, 'monday', product.id, 1)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)

                    })

            })
        })
    })

    after(() => disconnect())
})

