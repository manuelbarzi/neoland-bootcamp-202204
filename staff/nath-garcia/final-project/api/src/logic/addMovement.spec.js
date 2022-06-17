const { connect, disconnect } = require('mongoose')
const { User, Movement } = require('../models')
const { NotFoundError } = require('../errors')
const addMovement = require('./addMovement')
const { expect } = require('chai')
const { account } = require('../models/schemas')

describe('addMovement', () => {
    before(() => connect('mongodb://localhost:27017/final-pro-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Movement.deleteMany()]))

    describe('when user already exists', () => {
        let user 

        beforeEach(() => {
            user = new User({
                name: 'Peppa',
                surname: 'Pig',
                username: 'lapeppa',
                email: 'lapeppa@mail.com',
                phone: '643643643',
                password: '01020300'
            })

            return user.save()
        })

        it('succeeds on correct user data', () => {
            addMovement(user.id, 'income', Movement.SALARY, 'full salary for january', 2000, account.id)
                .then(movementId => {
                    expect(movementId).to.be.a('string')

                    return Movement.findById(movementId)
                })
                .then(movement => {
                   expect(movement.user.toString()).to.equal(user.id)
                   expect(movement.type).to.equal('income')
                   expect(movement.category).to.equal(9)
                   expect(movement.concept).to.equal('full salary for january')
                   expect(movement.amount).to.equal(2000)
                   expect(movement.account.toString()).to.equal(account.id)
                   expect(movement.date).to.be.instanceOf(Date)
                })
        })
    
    })

    afterEach(() => Promise.all([User.deleteMany(), Movement.deleteMany()]))

    after(() => disconnect())
})