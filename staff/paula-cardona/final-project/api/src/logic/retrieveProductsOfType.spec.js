require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Product} = require("../models")
const { NotFoundError } = require('../errors')
const retrieveProductsOfType = require('./retrieveProductsOfType')
const { expect } = require('chai')


describe ('retrieveProductsOfType' , () => {
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


        describe ('when there are products', () =>{
            let allCreatedProducts
            
            
            beforeEach (() => {
                
                const products = [
                    ['baguette', 0 ],
                    ['bretón', 0],
                    ['gallega', 0 ],
                    ['integral', 1 ],
                    ['molde', 1 ],
                    ['ensaimada', 2 ]
                ]
                const productsPromises = products.map(elemento=> Product.create ({title: elemento[0], type: elemento [1]}) )
                return Promise.all(productsPromises)
                    .then((result) =>{
                        allCreatedProducts=result
                    })
            })
            afterEach(() => Product.deleteMany())
                
            it ('success on retrieve product', () => {
                debugger
                return retrieveProductsOfType(user.id, Product.BLANCO)
            

                    .then((arrayProducts) => {
                        expect(arrayProducts).to.be.instanceOf(Array)
                        expect(arrayProducts.length).to.be.equal(3)

                        arrayProducts.forEach (product=> {
                            expect(product.type).to.be.equal(0)
                        })
                    })

            })


            it ('fails when userId does not exist', () => {
                const wrongId = new ObjectId().toString() //crea un id de tipo mongoose
    
                return retrieveProductsOfType(wrongId, Product.BLANCO)
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
        let product
        
        beforeEach (() => {
            product = new Product({ title: 'baguette', type: 0 })
            return product.save()
        })
            
        it('fails on user id from non-existing user', () => {
            const unexistingUserId = new ObjectId().toString()

            return retrieveProductsOfType(unexistingUserId, Product.BLANCO)
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

module.exports = retrieveProductsOfType
