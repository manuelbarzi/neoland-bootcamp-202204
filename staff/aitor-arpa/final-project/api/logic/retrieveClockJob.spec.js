const { User, Clock, Job } = require('../models')
const retrieveClockJob = require('./retrieveClockJob')
const { connect, disconnect } = require('mongoose')
const { expect } = require('chai')


describe('retrieveClockJob', () => {

    before(() => connect('mongodb://localhost:27017/test')) // conexion a la base de datos 
    
    beforeEach(() => {
        return Promise.all([User.deleteMany(), Clock.deleteMany(),Job.deleteMany()])
            .then(() => {  
                newuser = new User({ name: 'Miguel', username: 'Mingu', password: '123123123', role: 'worker', DNI: '123123123s', email:'sadf@sdfs.vo' })                            
              return newuser.save()
            })
            .then(user =>{
                newjob = new Job({ title: 'titulo', addres: 'c/Esa', worker:[user.id]  })
                return newjob.save()

            })
          
    })

    it('sucees on user exist', () => {
       
        return retrieveClockJob(newuser.id, newjob.id)        
            .then(find => {
                expect(find.length).to.be.equal(1)
                expect(find).to.instanceOf(Array)
                
                
            })

    })
    after(() => disconnect())
})

    