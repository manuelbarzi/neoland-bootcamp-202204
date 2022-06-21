const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')
const retrieveProjects = require('./retrieveProjects')
const { expect } = require('chai')

describe('retrieveProjects', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([Project.deleteMany(), User.deleteMany()]))

    describe('on existing users and projects', () => {

        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
            return user.save()
  
        })

        describe('when user already has projects', () => {
            let project1, project2, project3, allProjects

            beforeEach(() => {
                project1 = new Project({ user: user.id, title: 'project 1', code: '<p>hola mundo</p>' })
                project2 = new Project({ user: user.id, title: 'project 2', code: '<p>hola mundo</p>' })
                project3 = new Project({ user: user.id, title: 'project 3', code: '<p>hola mundo</p>' })

                return Promise.all([project1.save(), project2.save(), project3.save()])
                    .then(projects => allProjects = projects)
            })

            it('succeeds on correct user data', () =>
                retrieveProjects(user.id)
                    .then(projects => {
                        expect(projects).to.be.instanceOf(Array)

                        expect(projects).to.have.lengthOf(3)

                        projects.forEach(project => {
                            const found = allProjects.some(_project => {
                                return _project.id === project.id && _project.title === project.title && _project.code === project.code
                            })

                            expect(found).to.be.true
                        })
                    })
            )
         })   

        describe('when user has no projects', () => {
            it('succeeds on correct user data', () =>
                retrieveProjects(user.id)
                    .then(projects => {
                        expect(projects).to.be.instanceOf(Array)

                        expect(projects).to.have.lengthOf(0)
                    })
            )
        })

        it('fails on incorrect user id', () => {
            const wrongId = new ObjectId().toString()

            return retrieveProjects(wrongId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongId} does not exist`)
                })
        })
        
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()

            return retrieveProjects(unexistingUserId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${unexistingUserId} does not exist`)
                })
        })
    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})