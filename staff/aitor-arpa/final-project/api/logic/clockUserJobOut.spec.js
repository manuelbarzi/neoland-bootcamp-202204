const { expect } = require("chai");
const { connect, disconnect } = require("mongoose");
const { User, Job, Clock } = require("../models");
const clockUserJobOut = require("./clockUserJobOut");
const { AuthError, NotFoundError } = require("errors");

describe("clockUserJobOut", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos
  let userId;
  let jobId;
  beforeEach(() => {
    return Promise.all([
      User.deleteMany(),
      Job.deleteMany(),
      Clock.deleteMany(),
    ])
      .then(() => {
        userWork = new User({
          name: "Miguel",
          username: "Mingu",
          password: "123123123",
          role: "worker",
          DNI: "123123123s",
        });
        return userWork.save();
      })
      .then((_userId) => {
        userId = _userId.id;
        newJob = new Job({
          title: "new Job",
          description: "hazlo tu ",
          address: " c/Escopeta",
          workers: _userId,
        });
        return newJob.save();
      })
      .then((_jobid) => {
        jobId = _jobid.id;
        clockid = new Clock({ user: userWork, job: _jobid });
        return clockid.save();
      });
  });
  it("sucees on user clock and job exist ", () => {
    return clockUserJobOut(userId, clockid.id, jobId).then((result) => {
      expect(result.id).to.be.equal(clockid.id);

      expect(result.timeout).to.be.instanceOf(Date);
    });
  });
  it("error when ", () => {
    return clockUserJobOut(userId, jobId, clockid.id).catch((result) => {
      expect(result).to.be.instanceOf(NotFoundError);
    });
  });

  it("error on Worker not  exist", () => {
    return clockUserJobOut(jobId, jobId, clockid.id).catch((result) => {
      expect(result.message).to.be.equals(
        `user with id ${jobId} does not exist`
      );
      expect(result).to.instanceOf(NotFoundError);
    });
  });
  after(() => disconnect());
});
