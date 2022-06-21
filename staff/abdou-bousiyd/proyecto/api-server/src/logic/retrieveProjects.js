const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')
// const { validateStringNotEmptyNoSpaces } = require('../validators')

function retrieveProjects(userId) {
    // validateStringNotEmptyNoSpaces(userId, 'user id')

    return User.findById(userId).lean()
        .then(user => {
            if (!user)
                throw new NotFoundError(`user with id ${userId} does not exist`)

            return Project.find({ user: userId }).lean()
        })
        .then(projects => {
            
            projects.forEach(project => {
                project.id = project._id.toString()
                delete project._id

                delete project.__v

            })

            return projects
        })

}

module.exports = retrieveProjects