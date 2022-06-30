const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')

function createProject(userId, title, code) {

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Project.create({ user: userId, title, code })
        })
        .then(project => project.id)
}

module.exports = createProject