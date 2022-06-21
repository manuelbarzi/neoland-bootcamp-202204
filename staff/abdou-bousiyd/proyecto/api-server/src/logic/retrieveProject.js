const { Project } = require("../models");
const { NotFoundError } = require("../errors");

function retrieveProject(projectId) {

  return Project.findById(projectId)
    .lean()
    .then((project) => {
      if (!project)
        throw new NotFoundError(`project with id ${projectId} does not exist`);
        project.id = project._id.toString()

        delete project._id
        delete project.__v
        
      return project;
    });
}

module.exports = retrieveProject;
