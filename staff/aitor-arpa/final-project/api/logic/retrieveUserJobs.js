const { User, Job } = require("../models");
const { NotFoundError } = require("errors");
const { validateId } = require("validator");

function retrieveUserJobs(userId) {
  validateId(userId);

  return User.findById(userId)
    .then((user) => {
      debugger;
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      return Job.find({ user: userId });
    })
    .then((jobs) => {
      if (!jobs) return [];
      jobs.forEach((job) => {
        const doc = job._doc;
        delete doc._v;

        return doc;
      });

      return jobs;
    });
}

module.exports = retrieveUserJobs;
