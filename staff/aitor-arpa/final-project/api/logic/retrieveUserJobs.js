const { User, Job } = require("../models");
const { NotFoundError } = require("errors");
const { validateId } = require("validator");

function retrieveUserJobs(userId) {
  validateId(userId);

  return User.findById(userId)
    .then((user) => {
      if (!user)
        throw new NotFoundError(`user with id ${userId} does not exist`);

      return Job.find({ worker: userId }).lean();
    })
    .then((jobs) => {
      jobs.forEach((job) => {
        job.id = job._id.toString();
        delete job._id;

        delete job.__v;
      });

      return jobs;
    });
}

module.exports = retrieveUserJobs;
