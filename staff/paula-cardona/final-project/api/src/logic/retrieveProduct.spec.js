require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Product} = require("../models")
const { NotFoundError } = require('../errors')
const retrieveProduct = require('./retrieveProduct')
const { expect } = require('chai')


describe ('retrieveProduct' , () => {
    before (() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))

    describe ('when user exists', () => {
        let user

        beforeEach (() => {
            user = new User({ name: 'Papa', username: 'papagayo', email: 'papagayo@gmail.com', password: '123123123', address: 'Calle Madrid' })

            return user.save()
        })
        afterEach(() => Promise.all([User.deleteMany()]))


        describe ('when user already has products', () =>{
            let product, product2, product3
            
            beforeEach (() => {
                
                product = new Product({ title: 'baguette', type:0 })
                product2 = new Product({ title: 'rustico', type: 1 })
                product3 = new Product({ title: 'ensaimada', type: 2 })

                return Promise.all([product.save(), product2.save(), product3.save()])
            })
                
            it ('success on retrieve product', () => {
                return retrieveProduct (user.id, product.id)
                                
                    .then((product) => {
                        expect(product.title).to.be.equal('baguette')
                        expect(product.type).to.be.equal(0)
                    })
            })


            it ('fails when userid does not exist', () => {
                const wrongId = new ObjectId().toString() //crea un id de tipo mongoose
    
                return retrieveProduct(wrongId, product.id)
                    .then(() =>{
                        throw new Error('should not reach this point')
                    })
                    .catch((error) => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.be.equal(`user with id ${wrongId} does not exist`)
                    })
            })
            it ('fails when productId does not exist', () => {
                const wrongId = new ObjectId().toString() //crea un id de tipo mongoose
    
                return retrieveProduct(user.id, wrongId)
                    .then(() =>{
                        throw new Error('should not reach this point')
                    })
                    .catch((error) => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.be.equal(`product with id ${wrongId} does not exist`)
                    })
            })

        })
        describe('when user does not exist', () => {
            let product
            
            beforeEach (() => {
                product = new Product({ title: 'baguette', type: 0 })
                return product.save()
            })
                
            it('fails on user id from non-existing user', () => {
                const unexistingUserId = new ObjectId().toString()
    
                return retrieveProduct(unexistingUserId, product.id)
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

module.exports = retrieveProduct