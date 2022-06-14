const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')
const createProject = require('./createProject')
const { expect } = require('chai')

describe('createProject', () => {
    before(() => connect('mongodb://localhost:27017/notes-db-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Project.deleteMany()]))

    describe('when project already exists', () => {
        let user

        beforeEach(() => {
            user = new User({ name: 'Papa Gayo', username: 'papagayo', password: '123123123' })
            return user.save()
        })

        it('succeeds on correct project data', () => 
            createProject(user.id, 'button html css', '<button> test success </button>')
                .then(projectId => {
                    expect(projectId).to.be.a('string')
                    return Project.findById(projectId)
                })
                .then( project => {
                    expect(project.user.toString()).to.equal(user.id)
                    expect(project.title).to.equal('button html css')
                    expect(project.code).to.equal('<button> test success </button>')
                    expect(project.date).to.be.instanceOf(Date)
                })
        )
        it('fails on incorrect project id', () => {
            const wrongId = new ObjectId().toString()

            return createProject(wrongId, 'button html css', '<button> test success </button>')
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

            return createProject(unexistingUserId, 'Hello World')
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