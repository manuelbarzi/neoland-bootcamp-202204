const { expect } = require("chai");
const { connect, disconnect } = require("mongoose");
const { User, Job } = require("../models");
const retrieveUserJobs = require("./retrieveUserJobs");

describe("clockUserIn", () => {
  before(() => connect("mongodb://localhost:27017/test")); // conexion a la base de datos
  let user;
  beforeEach(() => {
    return Promise.all([User.deleteMany(), Job.deleteMany()])
      .then(() => {
        user = new User({
          name: "Miguel",
          username: "Mingu",
          password: "123123123",
          role: "worker",
          DNI: "123123123s",
        });
        return user.save();
      })
      .then((user) => {
        job = new Job({
          title: "new Job",
          description: "hazlo tu ",
          address: " c/Escopeta",
          worker: user.id,
        });
        job2 = new Job({
          title: "new Job",
          description: "hazlo tu ",
          address: " c/Escopeta",
          worker: user.id,
        });
        return Promise.all([job.save(), job2.save()]);
      });
  });
  it("sucess on Worker exist", () => {
    return retrieveUserJobs(user.id).then((result) => {
      expect(result.length).to.be.equal(2);
      expect(result["0"].title).to.be.equal(`new Job`);
      expect(result["0"].description).to.be.equal(`hazlo tu `);
      expect(result["0"].address).to.be.equal(" c/Escopeta");
      expect(result).to.instanceOf(Array);
    });
  });
});
