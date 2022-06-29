const { User, Clock, Job } = require("../models");
const retrieveClockJob = require("./retrieveClockJob");
const { connect, disconnect } = require("mongoose");
const { expect } = require("chai");
const { NotFoundError } = require("errors");

describe("retrieveClockJob", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos
  let _user, _job;
  beforeEach(() => {
    return Promise.all([
      User.deleteMany(),
      Clock.deleteMany(),
      Job.deleteMany(),
    ])
      .then(() => {
        newuser = new User({
          name: "Miguel",
          username: "Mingu",
          password: "123123123",
          role: "worker",
          DNI: "123123123s",
          email: "sadf@sdfs.vo",
        });
        return newuser.save();
      })
      .then((user) => {
        _user = user;
        newjob = new Job({ title: "titulo", addres: "c/Esa", worker: user.id });
        return newjob.save();
      })
      .then((job) => {
        _job = job;

        Clock.create({ job: job.id, user: _user.id });
      });
  });

  it("sucees on user exist", () => {
    return retrieveClockJob(newuser.id, newjob.id).then((find) => {
      expect(find.length).to.be.equal(1);
      expect(find).to.instanceOf(Array);
    });
  });

  it("error on user not exist", () => {
    return retrieveClockJob(newjob.id, newuser.id).catch((find) => {
      expect(find.message).to.be.equal("User Not Found");
      expect(find).to.instanceOf(NotFoundError);
    });
  });

  it("error on job not exist", () => {
    return retrieveClockJob(newuser.id, newuser.id).catch((find) => {
      expect(find.message).to.be.equal("Clock Not Found");
      expect(find).to.instanceOf(NotFoundError);
    });
  });
  after(() => disconnect());
});
