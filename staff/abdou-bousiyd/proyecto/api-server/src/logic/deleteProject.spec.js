const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')
const deleteProject = require('./deleteProject')
const { expect } = require('chai')

describe('deleteProject', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Project.deleteMany()]))

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Ele Fante', username: 'elefante', password: '123123123' })

            return user.save()
        })

        describe('when user already has projects', () => {
            let project1, project2, project3, allProjects

            beforeEach(() => {
                project1 = new Project({ user: user.id, title: 'project 1', code: '<h1>hola mundo</h1>' })
                project2 = new Project({ user: user.id, title: 'project 2', code: '<h1>hola mundo</h1>' })
                project3 = new Project({ user: user.id, title: 'project 3', code: '<h1>hola mundo</h1>' })

                return Promise.all([project1.save(), project2.save(), project3.save()])
                    .then(projects => allProjects = projects)
            })

            it('succeeds on correct user data', () =>
                deleteProject(user.id, project2.id)
                    .then(result => {
                        expect(result).to.be.undefined

                        return Project.findById(project2.id)
                    })
                    .then(project2 => expect(project2).to.be.null)
            )
        })

        describe('when user has no projects', () => {
            it('succeeds on correct user data', () => {
                const unexistingProjectId = new ObjectId().toString()

                return deleteProject(user.id, unexistingProjectId)
                    .then(() => {
                        throw new Error('should not reach point')
                    })
                    .catch(error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal(`project with id ${unexistingProjectId} does not exist`)
                    })
            })
        })

        it('fails on incorrect user id', () => {
            const wrongUserId = new ObjectId().toString()
            const unexistingProjectId = new ObjectId().toString()

            deleteProject(wrongUserId, unexistingProjectId)
                .then(() => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {
                    expect(error).to.be.instanceOf(NotFoundError)
                    expect(error.message).to.equal(`user with id ${wrongUserId} does not exist`)
                })
        })
    })

    describe('when user does not exist', () => {
        it('fails on unexisting user id', () => {
            const unexistingUserId = new ObjectId().toString()
            const unexistingProjectId = new ObjectId().toString()

            deleteProject(unexistingUserId, unexistingProjectId)
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