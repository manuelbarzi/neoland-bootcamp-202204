const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')
const retrievePens = require('./retrievePens')
const { expect } = require('chai')

describe('retrievePens', () => {
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
                retrievePens(user.id)
                    .then(projects => {
                        expect(projects).to.be.instanceOf(Array)

                        expect(projects).to.have.lengthOf(3)

                    })
            )
         })   

        describe('when user has no projects', () => {
            it('succeeds on correct user data', () =>
                retrievePens(user.id)
                    .then(projects => {
                        expect(projects).to.be.instanceOf(Array)

                        expect(projects).to.have.lengthOf(0)
                    })
            )
        })

    })

    afterEach(() => User.deleteMany())

    after(() => disconnect())
})