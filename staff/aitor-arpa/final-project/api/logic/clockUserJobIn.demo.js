require("dotenv").config();

const { connect, disconnect } = require("mongoose");
const clockUserJobIn = require("./clockUserJobIn");
const { User, Clock, Job } = require("../models");

const {
  env: { MONGO_URL_TEST },
} = process;

// $ node logic/clockUserIn.demo.js
// $ node --inspect-brk logic/clockUserIn.demo.js

connect(MONGO_URL_TEST)
  .then(() =>
    Promise.all([User.deleteMany(), Clock.deleteMany(), Job.deleteMany()])
  )
  .then(() => {
    const user = new User({
      name: "Pepito Grillo",
      username: "pepigri",
      email: "pepigri@gmail.com",
      password: "123123123",
    });
    const job = new Job({ worker: user.id });
    return Promise.all([user.save(), job.save()]);
  })
  .then(
    ([user, job]) => clockUserJobIn(user.id, job.id)
    //.then(() => clockUserJobIn(user.id,job.id))
  )
  .then(console.log)
  .catch(console.error)
  .then(disconnect);
