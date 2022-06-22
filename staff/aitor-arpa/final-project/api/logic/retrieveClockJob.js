const { NotFoundError } = require("errors");
const { User, Clock } = require("../models");
const { validateId } = require("validator");

function retrieveClockJob(userid, jobid) {
  validateId(userid);
  validateId(jobid);
  return User.findById(userid)
    .then((user) => {
      if (!user) throw new NotFoundError("User Not Found");
      return Clock.find({ job: jobid, user: userid });
    })
    .then((job) => {
      if (!job) throw new NotFoundError("Clock Not Found");
      if (job <= 0) return [];

      return job;
    });
}

module.exports = retrieveClockJob;
