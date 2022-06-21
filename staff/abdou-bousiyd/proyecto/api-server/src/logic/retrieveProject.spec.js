const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveProject = require('./retrieveProject')
const { expect } = require('chai')

describe('retrieveProject', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => User.deleteMany())

    describe('on existing users and project', () => {

        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
            return user.save()
  
        })

        describe('when user already has projects', () => {
            let project

            beforeEach(() => {
                project = new Project({ user: user.id, title: 'project 1', code: '<p>hola mundo</p>' })

                return project.save()
            })

            it('succeeds on correct project id', () => 
                retrieveProject(project.id) 
                    .then(project => {
                        expect(project.constructor).to.equal(Object)
                        expect(project.title).to.equal('project 1')
                        expect(project.code).to.equal('<p>hola mundo</p>')
                    })   
            )
            it('fails on incorrect id', () => {
                const wrongId = new ObjectId().toString()
    
                retrieveProject(wrongId)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`project with id ${wrongId} does not exist`)
                    })
            })
        }) 
        
        describe('when project does not exist', () => {
            it('fails on unexisting project id', () => {
                const unexistingProjectId = new ObjectId().toString()
    
                return retrieveProject(unexistingProjectId)
                    .then(() => {
                        throw new Error('should not reach this point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`project with id ${unexistingProjectId} does not exist`)
                    })
            })
        })

    })


    
    afterEach(() => User.deleteMany())

    after(() => disconnect())
})