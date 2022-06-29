const { expect } = require("chai");
const { connect, disconnect } = require("mongoose");
const { User, Clock } = require("../models");
const clockUserIn = require("./clockUserIn");
const { ConflictError } = require("errors");

describe("clockUserIn", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos
  let userWork;
  beforeEach(() => {
    return Promise.all([User.deleteMany(), Clock.deleteMany()]).then(() => {
      userWork = new User({
        name: "Miguel",
        username: "Mingu",
        password: "123123123",
        role: "worker",
        DNI: "123123123s",
      });
      return userWork.save();
    });
  });

  it("sucess on Worker exist", () => {
    debugger;
    return clockUserIn(userWork.id).catch((id) => {
      expect(id).to.instanceOf(ConflictError);
    });
  });

  it("error on Worker not  exist", () => {
    newclock = Clock.create({ user: userWork.id, job: null });
    return clockUserIn(userWork.id).catch((registertimein) => {
      expect(registertimein.message).to.be.equals(`${newclock.id} not found`);
      expect(registertimein).to.instanceOf(ConflictError);
    });
  });

  after(() => disconnect());
});
