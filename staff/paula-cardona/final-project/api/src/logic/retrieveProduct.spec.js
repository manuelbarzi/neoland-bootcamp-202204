require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Product} = require("../models")
const { NotFoundError } = require('../errors')
const retrieveProduct = require('./retrieveSchedule')
const { expect } = require('chai')


describe ('retrieveProduct' , () => {
    before (() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))

    describe ('when user exists', () => {
        let user

        beforeEach (() => {
            user = new User({ name: 'Papa', surname: 'Gayo', username: 'papagayo', email: 'papagayo@gmail.com', password: '123123123', address: 'Calle Madrid' })

            return user.save()
        })
        afterEach(() => Promise.all([User.deleteMany()]))


        describe ('when user already has products', () =>{
            let product, product2, product3
            
            beforeEach (() => {
                
                product = new Product({ title: 'baguette', description: 'baguette francesa' })
                product2 = new Product({ title: 'baguette', description: 'baguette francesa' })
                product3 = new Product({ title: 'baguette', description: 'baguette francesa' })

                return Promise.all([product.save(), product2.save(), product3.save()])
            })
                
            it ('success on retrieve product', () => {
                return retrieveProduct (user.id, product.id)
                                
                    .then((product) => {
                        expect(product).to.be.instanceOf(Array)
                        expect(product.length).to.be.equal(1)
                    })
            })

            


        })



    })

    after(() => disconnect())
})

module.exports = retrieveProduct