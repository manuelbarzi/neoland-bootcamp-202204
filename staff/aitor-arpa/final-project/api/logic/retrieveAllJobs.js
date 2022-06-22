const { User, Job } = require("../models");
const { NotFoundError, AuthError } = require("errors");
const { validateId } = require("validator");

function retrieveAllJobs(userId) {
  validateId(userId);

  return User.findById(userId)
    .then((user) => {
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      if (user.role !== "admin")
        throw new AuthError(`user with id ${userId} is not an admin`);

      return Job.find();
    })
    .then((jobs) => {
      jobs.forEach((job) => {
        // TODO sanitise
      });

      return jobs;
    });
}

module.exports = retrieveAllJobs;
