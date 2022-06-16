const { User, Clock, Job } = require('../models')
const retrieveJobWorker = require('./retrieveJobWorker')
const { connect, disconnect } = require('mongoose')
const { expect } = require('chai')
const {  NotFoundError } = require('errors')
const { user } = require('../models/schemas')


describe('retrieveJobWorker', () => {

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
       
        return retrieveJobWorker(newuser.id, newjob.id)        
            .then(find => {
                expect(find.length).to.be.equal(1)
                expect(find).to.instanceOf(Array)
                
                
            })

    })
})
    