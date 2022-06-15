const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User,} = require('../models')
const ClocUserin = require('../logic/clockUserIn')
const { AuthError } = require('errors')



describe('ClocUserin', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
let userWork
    beforeEach(() => {
        return User.deleteMany()
            .then(() => {

                userWork = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s' })
                return userWork.save()

            })
    })
    
    it ('sucees on Worker exist', () =>{
     
    return ClocUserin(userWork.id)
    
    .then(registertimein => {
        expect(registertimein.user.toString()).to.be.equal(userWork.id)
        expect(registertimein.timein).to.instanceOf(Date)
    })
    

    

    })

    it ('error on Worker not  exist', () =>{
     
        return ClocUserin('232123123123')
        
        .then(registertimein => {
            expect(registertimein.message).to.be.equals(`User not exist`)
            expect(registertimein).to.instanceOf(AuthError)
        })
        
    
        
    
        })
})