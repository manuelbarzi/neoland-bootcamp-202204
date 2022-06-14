const { User, Project } = require('../models')
const { NotFoundError } = require('../errors')
const { validateStringNotEmptyNoSpaces, validateString } = require('../validators')

function deleteProject(userId, projectId) {
    validateStringNotEmptyNoSpaces(userId, 'user id')
    validateStringNotEmptyNoSpaces(projectId, 'project id')

    return User.findById(userId).lean()
    .then(user => {
        if(!user) throw new NotFoundError(`user with id ${userId} does not exist`)
        return Project.deleteOne({ _id: projectId })
    })
    .then(result => {
        if (!result.deletedCount) throw new NotFoundError(`project with id ${projectId} does not exist`)
    })
    .then(() => { })
}

module.exports = deleteProject