const { User, Job } = require("../models");
const { NotFoundError, ConflictError } = require("errors");
const { validateId } = require("validator");

function retrieveUserJobs(userId) {
  validateId(userId);

  return User.findById(userId)
    .then((user) => {
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      return Job.findById(userId);
    })
    .then((jobs) => {
      jobs.forEach((job) => {
        // TODO sanitise
      });

      return jobs;
    });
}

module.exports = retrieveUserJobs;
