require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Schedule, Product, Item} = require('../models')
const { NotFoundError } = require('../errors')
const removeProductfromSchedule = require('./removeProductfromSchedule')
const { expect } = require('chai')


describe('removeProductfromSchedule', () => {
    before(() => connect(process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany(), Product.deleteMany(), Item.deleteMany() ]))
    afterEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany(), Product.deleteMany(), Item.deleteMany()]))

    describe('when user already exists', () => {

        
        let user
        let product, product2, product3

        beforeEach(() => {
            
            user = new User({ name: 'Papa', username: 'papagayo', email: 'papagayo@gmail.com', password: '123123123', address: 'Calle Madrid' })
            product = new Product({ title: 'baguette', type: 0 })
            product2 = new Product({ title: 'rustica', type: 3})
            product3 = new Product({ title: 'molde', type: 1 })

            return Promise.all([user.save(), product.save(), product2.save(), product3.save()])
        })
        afterEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))

        
        describe('When item already exists', () => {
        
            let item, item2, item3

            beforeEach(() => {
                item = new Item ({product: product.id, quantity: 3})
                item2 = new Item ({product: product2.id, quantity: 2})
                item3 = new Item ({product: product3.id, quantity: 1})
                
               return Promise.all([item.save(), item2.save(), item3.save()])
            })
            afterEach(() => Item.deleteMany())
             
            
            
            it('succeds on removing one from a product with 3 quantities', () => {
                
                const schedule = new Schedule({ user: user.id, monday:[item, item2, item3]})
                
                return schedule.save()
                    .then(( ) => {

                        return removeProductfromSchedule(user.id, 'monday', product.id)
                    })
                    .then((result) => {                    
                        expect(result).to.be.undefined

                        return Schedule.findById(schedule.id)
                    })                   
                    .then((schedule)=> {
                    
                        const found = schedule.monday.some(item => 
                            (item.product.toString() === product.id) && (item.quantity === 2) )

                        expect(found).to.be.true
                    })    
            })

            it('succeds on removing one product from correct data', () => {

                const schedule = new Schedule({ user: user.id, friday:[item, item2, item3]})
                
                return schedule.save()
                
                    .then(( ) => {

                        return removeProductfromSchedule(user.id, 'friday', product3.id)
                        
                    })
                    .then((result) => {                    
                        expect(result).to.be.undefined

                        return Schedule.findById(schedule.id)
                        
                    })                   
                    .then((schedule)=> {
                    
                        const found = schedule.friday.some(item => 
                            (item.product.toString() === product3.id) && (item.quantity === 0) )
                            
                        expect(found).to.be.false
                       
                    })    
            })
            it ('fails with wrong user Id', () => {
            
                const wrongId = new ObjectId().toString()
                const schedule = new Schedule({ user: wrongId, monday:[item, item2, item3]})
    
                return schedule.save()
                .then (( ) => {
                    
                    return removeProductfromSchedule(wrongId, 'monday', product.id)
                })
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
            })
        })

    })

    describe('When user does not exist', () => { 

        let item, item2, item3
        let product, product2, product3

        beforeEach(() => {
            product = new Product({ title: 'baguette', description: 'baguette francesa' })
            product2 = new Product({ title: 'rustica', description: 'rústica' })
            product3 = new Product({ title: 'molde', description: 'molde' })

            return Promise.all([product.save(), product2.save(), product3.save()])
        })
        afterEach(() => Product.deleteMany())

        beforeEach(() => {
            item = new Item ({product: product.id, quantity: 3})
            item2 = new Item ({product: product2.id, quantity: 2})
            item3 = new Item ({product: product3.id, quantity: 1})
                
            return Promise.all([item.save(), item2.save(), item3.save()])
        })
        afterEach(() => Item.deleteMany())
         

    })
        
    
    
  after(() => disconnect())
})