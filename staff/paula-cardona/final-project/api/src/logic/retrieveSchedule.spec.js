require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Schedule, Product, Item} = require("../models")
const { NotFoundError } = require('../errors')
const retrieveSchedule = require('./retrieveSchedule')
const { expect } = require('chai')


describe ('retrieveSchedule' , () => {
    before (() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany()]))

    describe ('when user exists', () => {
        let user
        let product

        beforeEach (() => {
            user = new User({ name: 'Papa', surname: 'Gayo', username: 'papagayo', email: 'papagayo@gmail.com', password: '123123123', address: 'Calle Madrid' })
            product = new Product({ title: 'baguette', description: 'baguette francesa' })

            return Promise.all([user.save(), product.save()])
        })
        afterEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))

        describe ('when item already exists', () => {
            let item

            beforeEach(() => {
                item = new Item ({product: product.id, quantity: 3})
                
                
               return item.save()
            })
            afterEach(() => Item.deleteMany())
             


            it ('success on retrieve schedule', () => {
                const schedule = new Schedule({ user: user.id, monday:[item]})
                return schedule.save()
                    .then(() => {
                        return retrieveSchedule (user.id)
                    })
                    .then((schedule) => {
                        expect(schedule.user.toString()).to.equal(user.id)
                    })
            })

            it ('fails when userid does not exist', () => {
                const wrongId = new ObjectId().toString() //crea un id de tipo mongoose
    
                return retrieveSchedule(wrongId)
                    .then(() =>{
                        throw new Error('should not reach this point')
                    })
                    .catch((error) => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.be.equal(`user with id ${wrongId} does not exist`)
                    })
            })

        })

        describe('when user does not exist', () => {
            it('fails on user id from non-existing user', () => {
                const unexistingUserId = new ObjectId().toString()
    
                return retrieveSchedule(unexistingUserId)
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

module.exports = retrieveSchedule