const { User, Clock, Job } = require("../models");
const retrieveClockUser = require("./retrieveClockUser");
const { connect, disconnect } = require("mongoose");
const { expect } = require("chai");
const { NotFoundError } = require("errors");

describe("retrieveClockUser", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos

  beforeEach(() => {
    return Promise.all([
      User.deleteMany(),
      Clock.deleteMany(),
      Job.deleteMany(),
    ])
      .then(() => {
        usercloc = new User({
          name: "Miguel",
          username: "Mingu",
          password: "123123123",
          role: "worker",
          DNI: "123123123s",
          email: "sadf@sdfs.vo",
        });
        return usercloc.save();
      })
      .then((user) => {
        data = new Date();
        newcloc = new Clock({ user: user.id, job: null, timeout: data });
        newjob = new Job({
          titel: "sdfs",
          description: "sdfasdf",
          address: "njb",
          workers: [user.id],
        });
        return Promise.all([newcloc.save(), newjob.save()]);
      });
  });

  it("error on user not exist", () => {
    return retrieveClockUser(newjob.id).catch((find) => {
      expect(find).to.instanceOf(NotFoundError);
      expect(find.message).to.be.equal(`${newjob.id} Not Found`);
    });
  });
  after(() => disconnect());
});
