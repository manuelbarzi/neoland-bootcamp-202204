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

      return Job.find().populate("worker");
    })
    .then((jobs) => {
      let clean = [];
      jobs.forEach((job) => {
        const doc = job._doc;
        delete doc.__v;
        doc.id = job.id;
        delete doc._id;
        delete doc.worker._doc._id;
        delete doc.worker._doc.role;
        delete doc.worker._doc.password;
        delete doc.worker._doc.username;
        delete doc.worker._doc.email;
        delete doc.worker._doc.Date;
        delete doc.worker._doc.nid;
        delete doc.worker._doc.__v;

        clean.push(doc);
        return clean;
      });

      return jobs;
    });
}

module.exports = retrieveAllJobs;
