const { User, Project } = require("../models");
const { NotFoundError } = require("../errors");
const {
  validateStringNotEmptyNoSpaces,
  validateString,
} = require("../validators");

function updateProject(userId, projectId, title) {
  validateStringNotEmptyNoSpaces(userId, "user id");
  validateStringNotEmptyNoSpaces(projectId, "project id");
  validateString(title, "title");

  return User.findById(userId)
    .lean()
    .then((user) => {
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      return Project.findById(projectId);
    })
    .then((project) => {
      if (!project)
        throw new NotFoundError(`project with id ${projectId} does not exist`);

      if (project.user.toString() !== userId)
        throw new AuthError(
          `project with id ${projectId} does not belong to user with id ${userId}`
        );

      project.title = title;

      return project.save();
    })
    .then(() => {});
}

module.exports = updateProject;
