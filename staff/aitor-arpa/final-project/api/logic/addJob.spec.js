const { connect, disconnect } = require("mongoose");
const { User, Job } = require("../models");
const addJob = require("./addJob");
const { expect } = require("chai");
const { AuthError } = require("errors");

describe("Add Work", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos

  beforeEach(() => {
    return Promise.all([User.deleteMany(), Job.deleteMany()]).then(() => {
      worker = new User({
        name: "Pringi",
        username: "Currante",
        password: "123123123",
        role: "worker",
        DNI: "1df2323123s",
        email: "as@as.com",
      });
      useradmin = new User({
        name: "Miguel",
        username: "Mingu",
        password: "123123123",
        role: "admin",
        DNI: "123123123s",
      });
      return Promise.all([useradmin.save(), worker.save()]);
    });
  });

  it("succeeds on correct user", () => {
    return addJob(
      useradmin.id,
      "TotKilain",
      "Reparacion de Puerta",
      "C/ escopeta Nº Pum",
      worker.id
    ).then((newwork) => {
      expect(newwork.title).to.be.equal("TotKilain");
      expect(newwork.description).to.be.equal("Reparacion de Puerta");
      expect(newwork.address).to.be.equal("C/ escopeta Nº Pum");
    });
  });
  it("fail on Worker user add new work", () => {
    return addJob(
      worker.id,
      "TotKilain",
      "Reparacion de Puerta",
      "C/ escopeta Nº Pum"
    ).then((newwork) => {
      expect(newwork.message).to.be.equal(`conctat for you Manager`);
      expect(newwork).to.instanceOf(AuthError);
    });
  });
  after(() => disconnect());
});
