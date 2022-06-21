const { User, Job } = require("../models");
const { NotFoundError, ConflictError } = require("errors");
const { validateId } = require("validator");

function retrieveJobs(userId) {
  validateId(userId);

  return User.findById(userId)
    .then((user) => {
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      return Job.find();
    })
    .then((job) => {
      if (!job) throw new ConflictError("not job with the indicated filter");
      return job;
    });
}

module.exports = retrieveJobs;
