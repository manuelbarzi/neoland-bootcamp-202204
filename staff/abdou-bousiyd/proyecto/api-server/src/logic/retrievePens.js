const { Project } = require("../models");
const { NotFoundError } = require("../errors");

function retrievePens() {

  return Project.find({}).lean()
    .then((projects) => {
      if (!projects)
        throw new NotFoundError(`projects does not exist`);
        // project.id = project._id.toString()

        // delete project._id
        // delete project.__v

      return projects;
    });
}

module.exports = retrievePens;
