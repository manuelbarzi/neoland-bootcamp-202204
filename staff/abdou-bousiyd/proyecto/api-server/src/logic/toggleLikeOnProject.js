
const { User, Project } = require("../models");
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces } = require('../validators')

function toggleLikeOnProject(userId, projectId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(projectId, 'project id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} does not exist`)

            return Project.findById(projectId)
        })
        .then(project => {
            if (!project) throw new NotFoundError(`Project with id ${projectId} does not exist`)
            
            const index = project.likes.findIndex(like => like._id.toString() === userId)
            if (index < 0)
                project.likes.push(userId)
            else
                project.likes.splice(index, 1)

            return project.save()
        })
        .then(() => {  })
}

module.exports = toggleLikeOnProject