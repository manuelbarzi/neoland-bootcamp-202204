require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Schedule, Product, Item} = require('../models')
const { NotFoundError } = require('../errors')
const addProductToSchedule = require('./addProductToSchedule')
const { expect } = require('chai')
const { user, product } = require('../models/schemas')


describe ('addProductToSchedule', () => {
    before (() => connect (process.env.TEST_MONGODB_URL))

    beforeEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany()]))
    afterEach(() => Promise.all([User.deleteMany(), Schedule.deleteMany()]))

    describe ('when user already exists', () => {
        let user

        beforeEach(() => {
            user= new User ({name: 'Papa', surname:'Gayo', username: 'papagayo', email: 'papagayo@gmail.com', password: '123123123', address:'Calle Madrid'})

            return user.save()
        })
        afterEach(() => User.deleteMany())

        describe ('when schedule and product already exists', () => {
            let schedule
            let product
            

            beforeEach (() =>{
                schedule= new Schedule ({user: user.id})
                product = new Product ({user: user.id, title:'baguette', description:'baguette francesa'})
                Promise.all(schedule.save(), product.save())
            })
            afterEach(() => Schedule.deleteMany())


            it('succeds on correct data', () => {
                return addProductToSchedule (user.id, 'monday', product.id, 1)
                    .then((itemId) => {
                        expect(itemId).to.be.a('string')

                        return Schedule.findById(schedule.id)
                        .then ((schedule)=> {
                            
                            const item = schedule.monday[0]

                            expect(item.id).to.be.equal(itemId)
                            expect(item.user._id.toString()).to.be.equal(user.id)  // ojo, crea objetos dentro de objetos
                            expect(item.product._id.toString()).to.be.equal(product.id) // cadena infinita
                            expect(item.quantity).to.be.equal(1)
                        })

                    })
            })
        })


    })
    after(() => disconnect())

})

