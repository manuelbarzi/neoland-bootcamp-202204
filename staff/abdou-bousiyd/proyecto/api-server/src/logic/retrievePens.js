const { Project } = require("../models");
const { NotFoundError } = require("../errors");

function retrievePens() {

  return Project.find({}).lean()
    .then((projects) => {
      if (!projects)
        throw new NotFoundError(`projects does not exist`);

      return projects;
    });
}

module.exports = retrievePens;
