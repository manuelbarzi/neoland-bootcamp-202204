const { connect, disconnect } = require("mongoose");
const { User, Clock, Job } = require("../models");
const { expect } = require("chai");
const retrieveUsersByRole = require("./retrieveUsersByRole");
const { AuthError } = require("errors");

describe("retrieveUserByRole", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos
  let _user, _job;
  beforeEach(() => {
    return Promise.all([
      User.deleteMany(),
      Clock.deleteMany(),
      Job.deleteMany(),
    ]).then(() => {
      admin = new User({
        name: "Miguel",
        username: "Mingu",
        password: "123123123",
        role: "admin",
        DNI: "123123123s",
        email: "sasdf@sdfs.vo",
      });
      worker = new User({
        name: "pepe",
        username: "pepe",
        password: "123123123",
        role: "worker",
        DNI: "123123123s",
        email: "sadf@sdfs.vo",
      });
      return Promise.all([admin.save(), worker.save()]);
    });
  });

  it("sucees on user is admin search admin", () => {
    role = "admin";
    return retrieveUsersByRole(admin.id, role).then((find) => {
      expect(find.length).to.be.equal(1);
      expect(find).to.instanceOf(Array);
    });
  });

  it("sussec on admins search workers", () => {
    role = "worker";
    return retrieveUsersByRole(admin.id, role).then((find) => {
      expect(find.length).to.be.equal(1);
      expect(find).to.instanceOf(Array);
    });
  });

  it("error on worker search", () => {
    role = "adminm";
    return retrieveUsersByRole(worker.id, role).catch((find) => {
      expect(find.message).to.be.equal(
        `user with id ${worker.id} is not an admin`
      );
      expect(find).to.instanceOf(AuthError);
    });
  });
  after(() => disconnect());
});
